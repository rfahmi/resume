import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import React, {useCallback, useEffect, useState, memo} from 'react';
import {Text} from 'react-native';
import {Bubble, GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification from 'react-native-push-notification';
import Header from '../../components/Header';
import {useTheme} from '../../utils/ThemeProvider';
const messagesRef = firestore().collection('messages');

const Chat = () => {
  const {colors} = useTheme();
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    readUser();
    const unsubscribe = messagesRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({type}) => type === 'added')
        .map(({doc}) => {
          const message = doc.data();
          return {...message, createdAt: message.createdAt.toDate()};
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback((msg) => {
    msg.forEach((doc) => {
      const data = doc;
      PushNotification.localNotification({
        channelId: 'ch1',
        title: data.user.name, // (optional)
        message: data.text, // (required)
      });
      console.log('INI DATA: ', data.text);
    });
    console.log(msg);
    setMessages((previousMessages) => GiftedChat.append(previousMessages, msg));
  }, []);

  const readUser = async () => {
    const u = await AsyncStorage.getItem('user');
    if (u) {
      setUser(JSON.parse(u));
    }
  };

  const handleSend = async (msg) => {
    const writes = msg.map((m) => messagesRef.add(m));
    await Promise.all(writes);
  };

  return (
    <>
      <Header title="Chat With Me" />
      <LinearGradient
        start={{x: 0.0, y: 1.0}}
        end={{x: 2.0, y: 0.0}}
        colors={[colors.primaryLight, colors.primaryDark]}
        style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 10, fontWeight: 'bold'}}>
          Direct Connected with Fahmi Rizalul
        </Text>
      </LinearGradient>
      <GiftedChat
        messages={messages}
        user={user}
        onSend={handleSend}
        showUserAvatar
        messagesContainerStyle={{backgroundColor: colors.background}}
        textInputStyle={{
          backgroundColor: colors.dim,
          color: colors.text,
        }}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: colors.dim,
              borderTopColor: colors.dim,
              borderTopWidth: 4,
            }}
          />
        )}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              textStyle={{
                left: {
                  color: colors.white,
                },
                right: {
                  color: colors.white,
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: colors.primary,
                },
                right: {
                  backgroundColor: colors.primaryLight,
                },
              }}
            />
          );
        }}
      />
    </>
  );
};

export default memo(Chat);
