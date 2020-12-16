import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, memo} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Header from '../../components/Header';
import {useTheme} from '../../utils/ThemeProvider';

const visitorsRef = firestore().collection('visitors');

const Auth = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const fcm_token = await AsyncStorage.getItem('fcm_token');
      visitorsRef
        .where('_id', '==', fcm_token)
        .get()
        .then((snapshot) => {
          snapshot.forEach(async (doc) => {
            const data = doc.data();
            console.log('User Found', data);
            await AsyncStorage.setItem('user', JSON.stringify(data));
          });
          navigation.replace('Chat');
        })
        .catch((err) => {
          setLoading(false);
          console.log('Error getting documents', err);
        });
    };
    checkUser();
  }, [navigation]);

  const handlePress = async (msg) => {
    const _id = await AsyncStorage.getItem('fcm_token');
    const u = {_id, name};

    // FIREBASE DATA
    const writes = visitorsRef.add(u);
    await Promise.all(writes);

    //LOCAL DATA
    await AsyncStorage.setItem('user', JSON.stringify(u));

    //NAVIGATE
    navigation.replace('Chat');
  };

  return (
    <>
      <Header title="Authentication" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 30,
        }}>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={{marginTop: 16}}>Connecting to neural network...</Text>
          </View>
        ) : (
          <>
            <TextInput
              mode="outlined"
              style={{height: 50, width: '100%', padding: 15, marginBottom: 20}}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
            <Button mode="contained" onPress={handlePress}>
              Enter
            </Button>
          </>
        )}
      </View>
    </>
  );
};

export default memo(Auth);
