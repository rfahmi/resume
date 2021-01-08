import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Appbar} from 'react-native-paper';
import {useTheme} from '../utils/ThemeProvider';
const Header = ({title, right}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const _goBack = () => navigation.goBack();

  return (
    <Appbar.Header
      style={{backgroundColor: colors.background, elevation: 0, zIndex: 2}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} />
      {right}
    </Appbar.Header>
  );
};

export default memo(Header);
