import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../../../../screens/chat';
const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
