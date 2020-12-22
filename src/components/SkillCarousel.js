import React, {useRef} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SkillCarousel = () => {
  const carouselRef = useRef();
  const techs = [
    require('../assets/icons/react.png'),
    require('../assets/icons/laravel.png'),
    require('../assets/icons/firebase.png'),
    require('../assets/icons/ionic.png'),
    require('../assets/icons/mysql.png'),
  ];
  const _renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 8}}>
        <Image source={item} style={{width: 72, height: 72}} />
      </View>
    );
  };
  return (
    <View
      style={{
        alignItems: 'center',
        marginVertical: 8,
      }}>
      <Carousel
        ref={carouselRef}
        data={techs}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        autoplay
        layoutCardOffset={100}
        // centerContent
        loop
        itemWidth={72}
      />
    </View>
  );
};

export default SkillCarousel;
