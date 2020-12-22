import firestore from '@react-native-firebase/firestore';
import React, {useCallback, useEffect, useState, memo} from 'react';
import {Text} from 'react-native';
import {Bubble, GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import LinearGradient from 'react-native-linear-gradient';
import {Appbar, Menu} from 'react-native-paper';
import PushNotification from 'react-native-push-notification';
import HeaderBack from '../../components/HeaderBack';
import {useTheme} from '../../utils/ThemeProvider';
const chatsRef = firestore().collection('chats');

const Chat = ({route, navigation}) => {
  const {chat, host} = route.params;
  const {colors} = useTheme();
  const [messages, setMessages] = useState([]);
  const [menu, setMenu] = useState(false);
  const hostUser = {
    _id: 1,
    name: 'Fahmi Rizalul',
  };

  useEffect(() => {
    const unsubscribe = chatsRef
      .doc(chat._id)
      .collection('messages')
      .onSnapshot((querySnapshot) => {
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
    // msg.forEach((doc) => {
    //   const data = doc;
    //   PushNotification.localNotification({
    //     channelId: 'ch1',
    //     title: data.user.name, // (optional)
    //     message: data.text, // (required)
    //   });
    //   console.log('INI DATA: ', data.text);
    // });
    // console.log(msg);
    setMessages((previousMessages) => GiftedChat.append(previousMessages, msg));
  }, []);

  const handleSend = async (e) => {
    const writes = e.map((m) => {
      chatsRef.doc(chat._id).collection('messages').add(m);
    });
    await Promise.all(writes);
  };

  const deleteChat = () => {
    setMenu(false);
    chatsRef.doc(chat._id).delete();
    navigation.navigate('Resume');
  };

  return (
    <>
      <HeaderBack
        title="Chat With Me"
        right={
          <Menu
            visible={menu}
            onDismiss={() => setMenu(false)}
            anchor={
              <Appbar.Action
                icon="dots-vertical"
                onPress={() => setMenu(true)}
                color={colors.text}
              />
            }>
            <Menu.Item onPress={deleteChat} title="Delete Account" />
          </Menu>
        }
      />
      {!host && (
        <LinearGradient
          start={{x: 0.0, y: 1.0}}
          end={{x: 2.0, y: 0.0}}
          colors={[colors.primaryLight, colors.primaryDark]}
          style={{alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 10, fontWeight: 'bold'}}>
            Direct Connected with Fahmi Rizalul
          </Text>
        </LinearGradient>
      )}
      <GiftedChat
        messages={messages}
        user={host ? hostUser : chat}
        onSend={handleSend}
        showUserAvatar
        renderUsernameOnMessage
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
