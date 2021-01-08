import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Appbar} from 'react-native-paper';
import {useTheme} from '../utils/ThemeProvider';
const Header = ({title, right, transparent}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const _openDrawer = () => navigation.openDrawer();

  return (
    <Appbar.Header
      style={{
        backgroundColor: transparent ? 'transparent' : colors.background,
        elevation: 0,
        zIndex: 2,
      }}>
      <Appbar.Action
        icon="menu"
        onPress={_openDrawer}
        color={transparent ? 'white' : colors.text}
      />
      <Appbar.Content
        title={title}
        color={transparent ? 'white' : colors.text}
      />
      {right}
    </Appbar.Header>
  );
};

export default memo(Header);
