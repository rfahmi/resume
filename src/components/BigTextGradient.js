import React, {memo} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useTheme} from '../utils/ThemeProvider';
import {useNavigation} from '@react-navigation/native';

const BigTextGradient = () => {
  const navigation = useNavigation();
  const {colors, isDark} = useTheme();
  return (
    <>
      <LinearTextGradient
        style={{fontWeight: 'bold', fontSize: 60}}
        locations={[0, 1]}
        colors={
          isDark
            ? [colors.primaryLight, colors.secondaryLight]
            : [colors.primary, colors.secondary]
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <TouchableWithoutFeedback
          onLongPress={() => navigation.navigate('Administrator')}>
          <Text>FAHMI RIZALUL</Text>
        </TouchableWithoutFeedback>
      </LinearTextGradient>
      <Text style={{fontSize: 24, color: colors.textSmooth}}>
        Front-End Engineer
      </Text>
    </>
  );
};

export default memo(BigTextGradient);
