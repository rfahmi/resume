import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Header from '../../components/Header';
import {uniqueID} from '../../utils/Generator';
import {useTheme} from '../../utils/ThemeProvider';

const chatsRef = firestore().collection('chats');

const Auth = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const fcm_token = await AsyncStorage.getItem('fcm_token');
      chatsRef
        .doc(fcm_token)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          if (data) {
            navigation.replace('ChatRoom', {chat: data, host: false});
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log('Error getting documents', err);
        });
    };
    checkUser();
  }, [navigation]);

  const handleStart = async () => {
    const fcm_token = await AsyncStorage.getItem('fcm_token');
    const user = {
      _id: fcm_token,
      name: name,
    };
    chatsRef.doc(fcm_token).set(user);
    chatsRef
      .doc(fcm_token)
      .collection('messages')
      .add({
        _id: uniqueID(),
        text:
          'Hi there, please tell me how I can help you today. I will connect in a second',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Fahmi Rizalul',
        },
      });
    navigation.replace('ChatRoom', {chat: user, host: false});
  };

  return (
    <>
      <Header title="Authentication" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'center',
        }}>
        {loading ? (
          <View
            style={{
              flex: 1,
              marginHorizontal: 24,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color={colors.text} />
            <Text style={{marginTop: 16, color: colors.text}}>
              Connecting to neural network...
            </Text>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              marginHorizontal: 24,
              // flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.text,
                fontSize: 32,
                fontWeight: 'bold',
                marginBottom: 16,
                width: Dimensions.get('window').width * 0.7,
              }}>
              Let me know who you are?
            </Text>
            <View>
              <TextInput
                mode="flat"
                style={{
                  marginVertical: 16,
                }}
                theme={{
                  colors: {
                    placeholder: colors.text,
                    text: colors.text,
                    primary: colors.text,
                    underlineColor: 'transparent',
                    background: colors.background,
                  },
                }}
                contentStyle={{color: colors.text}}
                label="Your name..."
                value={name}
                onChangeText={setName}
              />
              <Button
                disabled={!name}
                mode="contained"
                contentStyle={{height: 50}}
                onPress={handleStart}>
                START CHAT
              </Button>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default memo(Auth);
