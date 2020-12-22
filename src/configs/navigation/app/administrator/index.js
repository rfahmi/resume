import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AdministratorInbox from '../../../../screens/administrator/Inbox';
import AdministratorChatRoom from '../../../../screens/chat/ChatRoom';
const Stack = createStackNavigator();

const AdministratorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdministratorInbox"
        component={AdministratorInbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdministratorChatRoom"
        component={AdministratorChatRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AdministratorStack;
