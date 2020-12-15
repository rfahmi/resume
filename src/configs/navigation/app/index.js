import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from './home';
import Chat from './chat';
import {useTheme} from '../../../utils/ThemeProvider';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const {colors} = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{backgroundColor: colors.background}}>
      <Drawer.Screen name="Resume" component={Home} />
      <Drawer.Screen name="Chat With Me" component={Chat} />
    </Drawer.Navigator>
  );
};

export default AppStack;
