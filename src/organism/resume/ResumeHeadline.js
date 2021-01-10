import React, {memo} from 'react';
import {Animated, View} from 'react-native';
import {Button} from 'react-native-paper';
import BigTextGradient from '../../components/BigTextGradient';
import SocialLinks from '../../components/SocialLinks';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../utils/ThemeProvider';

const ResumeHeadline = ({opacity, translateY}) => {
  const navigation = useNavigation();
  const {colors, isDark} = useTheme();
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
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <BigTextGradient />
        <SocialLinks />
        <Button
          onPress={() => navigation.navigate('Live Chat')}
          mode={isDark ? 'contained' : 'outlined'}
          color={isDark ? colors.dim : colors.textSmooth}
          uppercase={false}
          style={{borderRadius: 50, marginTop: 16}}
          contentStyle={{paddingHorizontal: 20}}>
          Chat Me
        </Button>
      </View>
    </Animated.View>
  );
};

export default memo(ResumeHeadline);
