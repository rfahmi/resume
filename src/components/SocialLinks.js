import React, {memo} from 'react';
import {Linking, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useTheme} from '../utils/ThemeProvider';
const SocialLinks = () => {
  const {colors} = useTheme();
  return (
    <View style={{flexDirection: 'row'}}>
      <IconButton
        icon="github"
        color={colors.textSmooth}
        size={32}
        onPress={() => Linking.openURL('https://github.com/rfahmi')}
      />
      <IconButton
        icon="linkedin"
        color={colors.textSmooth}
        size={32}
        onPress={() => Linking.openURL('https://linkedin.com/rfahmi')}
      />
      <IconButton
        icon="web"
        color={colors.textSmooth}
        size={32}
        onPress={() => Linking.openURL('https://rfahmi.com')}
      />
    </View>
  );
};

export default memo(SocialLinks);
