import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatRoom from '../../../../screens/chat/ChatRoom';
import ChatAuth from '../../../../screens/chat/ChatAuth';
import ChatList from '../../../../screens/chat/ChatList';
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
        name="ChatList"
        component={ChatList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
