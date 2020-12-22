import React, {memo} from 'react';
import {Animated, View} from 'react-native';
import BigTextGradient from '../../components/BigTextGradient';
import SocialLinks from '../../components/SocialLinks';

const ResumeHeadline = ({opacity, translateY}) => {
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
