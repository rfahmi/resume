import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import Splash from '../../screens/splash';
import AppStack from './app';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
