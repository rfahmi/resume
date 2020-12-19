import React, {memo} from 'react';
import {Dimensions, View, Animated} from 'react-native';
import BigTextGradient from '../../components/BigTextGradient';
import SocialLinks from '../../components/SocialLinks';
import Toggle from '../../components/Toggle';
import {useTheme} from '../../utils/ThemeProvider';

const ResumeHeadline = ({opacity, translateY}) => {
  const {colors, isDark, setScheme} = useTheme();
  return (
    <Animated.View
      style={{
        opacity: opacity,
        transform: [{translateY: translateY}],
        position: 'absolute',
        marginTop: 55,
        flex: 1,
        paddingHorizontal: 16,
      }}>
      <View style={{flex: 1}}>
        <BigTextGradient />
        <SocialLinks />
      </View>
    </Animated.View>
  );
};

export default memo(ResumeHeadline);
