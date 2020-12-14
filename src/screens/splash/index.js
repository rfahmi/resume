import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import Logo from '../../components/Logo';
import {colors} from '../../constants/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('App'), 600);
  }, [navigation]);

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Logo />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 28}}>rfstore</Text>
          <Text>React Native Online Store Demo</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <Text style={{color: colors.gray, fontSize: 12}}>Versi 3.0.0</Text>
          <Text style={{color: colors.gray, fontSize: 12}}>
            {'\u00A9'} Fahmi Rizalul
          </Text>
        </View>
      </View>
    </>
  );
};

export default Splash;
