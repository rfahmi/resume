import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import Splash from '../../screens/splash';
import AppStack from './app';
import AdministratorStack from './administrator';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Administrator" component={AdministratorStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
