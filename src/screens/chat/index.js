import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Header from '../../components/Header';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //       },
  //     },
  //   ]);
  // }, []);

  const onSend = useCallback((m = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, m));
  }, []);

  return (
    <>
      <Header title="Chat With Me" />
      <GiftedChat
        messages={messages}
        onSend={(m) => onSend(m)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({});
