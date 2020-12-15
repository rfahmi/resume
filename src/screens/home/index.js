import React from 'react';
import {Dimensions, ScrollView, StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Caption} from 'react-native-paper';
import BigTextGradient from '../../components/BigTextGradient';
import Header from '../../components/Header';
import SocialLinks from '../../components/SocialLinks';
import Toggle from '../../components/Toggle';
import {useTheme} from '../../utils/ThemeProvider';

const Home = () => {
  const {colors, isDark, setScheme} = useTheme();
  return (
    <>
      <Header title="Resume" />
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <ScrollView
        style={{
          paddingHorizontal: 16,
          backgroundColor: isDark ? '#111' : '#fff',
        }}>
        <View style={{flex: 1}}>
          <BigTextGradient />
          <SocialLinks />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            height: 250,
            alignItems: 'center',
          }}>
          <View style={{width: Dimensions.get('window').width / 3}}>
            <Toggle
              onPress={() => setScheme(isDark ? 'light' : 'dark')}
              initialState={!isDark}
              onText="Day"
              offText="Night"
            />
          </View>
        </View>
        <LinearGradient
          start={{x: 0.0, y: 1.0}}
          end={{x: 2.0, y: 0.0}}
          colors={
            isDark
              ? [colors.secondary, colors.primaryLight]
              : [colors.primary, colors.secondaryLight]
          }
          style={{
            padding: 16,
            flex: 1,
            borderRadius: 16,
          }}>
          <Text
            style={{
              color: colors.background,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            What Can I do?
          </Text>
          <Caption style={{color: colors.background}}>
            Just making mobile app, usually using Javascript Framework like
            React Native
          </Caption>
          <View style={{height: 22}} />
          <Text
            style={{
              color: colors.background,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Experiences
          </Text>
          <Caption style={{color: colors.background}}>
            Just making mobile app, usually using Javascript Framework like
            React Native
          </Caption>
          <View style={{height: 22}} />
          <Text
            style={{
              color: colors.background,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Portfolios
          </Text>
          <Caption style={{color: colors.background}}>
            Just making mobile app, usually using Javascript Framework like
            React Native
          </Caption>
        </LinearGradient>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 32,
            paddingHorizontal: 24,
          }}>
          <Text style={{color: colors.text}}>
            Yes, that's not so much about me
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
