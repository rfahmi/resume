import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, memo} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Header from '../../components/Header';
import {uniqueID} from '../../utils/Generator';
import {useTheme} from '../../utils/ThemeProvider';

const visitorsRef = firestore().collection('visitors');
const roomsRef = firestore().collection('rooms');

const Auth = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [host, setHost] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHost = async () => {
      visitorsRef
        .where('master', '==', true)
        .get()
        .then((snapshot) => {
          if (snapshot._docs.length === 1) {
            snapshot.forEach(async (doc) => {
              const data = doc.data();
              console.log('Host Found', data);
              setHost(data);
              await AsyncStorage.setItem(
                'fcm_token_host',
                JSON.stringify(data._id),
              );
            });
          } else {
            console.log('Host False: ', snapshot);
            navigation.replace('App');
          }
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
    };

    const checkUser = async () => {
      const fcm_token = await AsyncStorage.getItem('fcm_token');
      visitorsRef
        .where('_id', '==', fcm_token)
        .get()
        .then((snapshot) => {
          if (snapshot._docs.length === 1) {
            snapshot.forEach(async (doc) => {
              const data = doc.data();
              console.log('User Found', data);
              await AsyncStorage.setItem('user', JSON.stringify(data));
              navigation.replace('ChatList', {
                owner: fcm_token,
                master: data.master,
              });
            });
          } else {
            console.log('Snap False: ', snapshot);
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log('Error getting documents', err);
        });
    };
    getHost();
    checkUser();
  }, [navigation]);

  const handlePress = async () => {
    //DATA VISITOR
    const _id = await AsyncStorage.getItem('fcm_token');
    const master = false;
    const visitor = {_id, name, master};
    // CREATE VISITOR
    const addVisitor = visitorsRef.add(visitor);
    await Promise.all(addVisitor);

    //DATA ROOM

    const room = {
      _id: uniqueID(),
      room_name: host.name,
      owner: _id,
      recepient: host._id,
      last_message: '(start chatting)',
    };

    //CREATE FIRST ROOM
    const addRoom = roomsRef.add(room);
    await Promise.all(addRoom);

    //LOCAL DATA
    await AsyncStorage.setItem('user', JSON.stringify(visitor));

    //NAVIGATE
    // navigation.replace('ChatRoom', {room: _id});
    navigation.replace('ChatList', {owner: _id, master: master});
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
            <View>
              <TextInput
                mode="outlined"
                style={{
                  backgroundColor: colors.background,
                  height: 50,
                  marginVertical: 16,
                  color: colors.text,
                }}
                placeholderTextColor={colors.text}
                placeholder="Your name..."
                contentStyle={{color: colors.text}}
                label="Who are you?"
                value={name}
                onChangeText={setName}
              />
              <Button
                mode="contained"
                contentStyle={{height: 50}}
                onPress={handlePress}>
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
