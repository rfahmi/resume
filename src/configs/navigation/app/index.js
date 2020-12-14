import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from './home';
import {useTheme} from '../../../utils/ThemeProvider';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const {colors} = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{backgroundColor: colors.background}}>
      <Drawer.Screen name="Resume" component={Home} />
    </Drawer.Navigator>
  );
};

export default AppStack;
