import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {useTheme} from '../../../utils/ThemeProvider';
import Chat from './chat';
import Home from './home';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: colors.background,
        activeBackgroundColor: colors.primaryLight,
        inactiveTintColor: colors.textSmooth,
        labelStyle: {
          marginLeft: 5,
        },
      }}
      drawerStyle={{backgroundColor: colors.background}}>
      <Drawer.Screen name="Resume" component={Home} />
      <Drawer.Screen name="Live Chat" component={Chat} />
    </Drawer.Navigator>
  );
};

export default AppStack;
