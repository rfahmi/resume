import React from 'react';
import {Text} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useTheme} from '../utils/ThemeProvider';

const BigTextGradient = () => {
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
        <Text>FAHMI RIZALUL</Text>
      </LinearTextGradient>
      <Text style={{fontSize: 24, color: colors.textSmooth}}>
        Front-End Developer
      </Text>
    </>
  );
};

export default BigTextGradient;
