import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useTheme} from '../utils/ThemeProvider';
const Header = ({title, right}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const _openDrawer = () => navigation.openDrawer();

  return (
    <Appbar.Header style={{backgroundColor: colors.background, elevation: 0}}>
      <Appbar.Action icon="menu" onPress={_openDrawer} />
      <Appbar.Content title={title} />
      <View style={{flex: 0.6, marginRight: 16}}>{right}</View>
    </Appbar.Header>
  );
};

export default memo(Header);
