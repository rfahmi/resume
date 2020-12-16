import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../../../../screens/chat';
import ChatAuth from '../../../../screens/chat/ChatAuth';
const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatAuth"
        component={ChatAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
