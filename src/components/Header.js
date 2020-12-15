import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {useTheme} from '../utils/ThemeProvider';
const Header = ({title}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const _openDrawer = () => navigation.openDrawer();

  return (
    <Appbar.Header style={{backgroundColor: colors.background, elevation: 0}}>
      <Appbar.Action icon="menu" onPress={_openDrawer} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;
