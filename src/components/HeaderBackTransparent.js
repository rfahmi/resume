import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Animated, Dimensions, StatusBar, View} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderBackTransparent = ({headerOpacity}) => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();
  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        opacity: headerOpacity,
        // paddingTop: StatusBar.currentHeight + 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}>
      <View
        style={{
          width: Dimensions.get('window').width,
          height: StatusBar.currentHeight,
          position: 'absolute',
          backgroundColor: 'transparent',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />
      <TouchableScale
        activeScale={0.7}
        onPress={_goBack}
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
          padding: 8,
          aspectRatio: 1 / 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        <Icon name="arrow-left" size={22} color="#fff" />
      </TouchableScale>
    </Animated.View>
  );
};

export default HeaderBackTransparent;
