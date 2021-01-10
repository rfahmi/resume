import React, {memo} from 'react';
import {Linking, ToastAndroid, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useTheme} from '../utils/ThemeProvider';
const SocialLinks = () => {
  const {colors} = useTheme();
  return (
    <View style={{flexDirection: 'row'}}>
      <IconButton
        icon="github"
        color={colors.textSmooth}
        size={28}
        onPress={() => Linking.openURL('https://github.com/rfahmi')}
      />
      <IconButton
        icon="linkedin"
        color={colors.textSmooth}
        size={28}
        onPress={() => Linking.openURL('https://linkedin.com/in/rfahmi')}
      />
      <IconButton
        icon="web"
        color={colors.textSmooth}
        size={28}
        onPress={() => Linking.openURL('https://rfahmi.com')}
      />
      <IconButton
        icon="email"
        color={colors.textSmooth}
        size={28}
        onPress={() => Linking.openURL('mailto:rfahmi@outlook.com')}
      />
      <IconButton
        icon="google-play"
        color={colors.textSmooth}
        size={28}
        onPress={() =>
          Linking.canOpenURL('market://details?id=com.rfahmi.resume').then(
            (a) => {
              if (a) {
                Linking.openURL('market://details?id=com.rfahmi.resume');
              } else {
                ToastAndroid.show(
                  'Oopps! Cannot found store app',
                  ToastAndroid.SHORT,
                );
              }
            },
          )
        }
      />
    </View>
  );
};

export default memo(SocialLinks);
