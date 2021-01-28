import React, {memo} from 'react';
import {Animated, StatusBar, View, Text} from 'react-native';
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
        marginTop: 55 + StatusBar.currentHeight,
        flex: 1,
        paddingHorizontal: 16,
      }}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <BigTextGradient />
        <SocialLinks />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <Button
            onPress={() => navigation.navigate('Live Chat')}
            mode={isDark ? 'contained' : 'contained'}
            color={isDark ? colors.dim : colors.primaryLight}
            uppercase={false}
            style={{borderRadius: 50}}
            contentStyle={{paddingHorizontal: 20}}>
            Chat Me
          </Button>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 12,
                height: 12,
                backgroundColor: '#51ea0a',
                borderRadius: 12,
                margin: 8,
              }}
            />
            <Text style={{color: colors.text}}>Online Now</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default memo(ResumeHeadline);
