import React, {memo} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

const Logo = () => (
  <Image
    source={require('../assets/images/rfstore.png')}
    style={styles.image}
  />
);

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    // aspectRatio: 1 / 1,
    resizeMode: 'contain',
    marginBottom: 12,
  },
});

export default memo(Logo);
