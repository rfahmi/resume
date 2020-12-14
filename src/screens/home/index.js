import React from 'react';
import {View, Text, Dimensions, ScrollView, StatusBar} from 'react-native';
import {Caption, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import Toggle from '../../components/Toggle';
import {useTheme} from '../../utils/ThemeProvider';

const Home = () => {
  const {colors, isDark, setScheme} = useTheme();
  return (
    <>
      <Header />
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
          <View style={{width: Dimensions.get('window').width * 0.5}}>
            <Text
              style={{fontSize: 40, fontWeight: 'bold', color: colors.text}}>
              FAHMI RIZALUL
            </Text>
          </View>
          <Text style={{fontSize: 24, color: colors.text}}>
            Front-End Developer
          </Text>
          <View style={{flexDirection: 'row'}}>
            <IconButton
              icon="github"
              color={colors.text}
              size={32}
              onPress={() => console.log('click')}
            />
            <IconButton
              icon="linkedin"
              color={colors.text}
              size={32}
              onPress={() => console.log('click')}
            />
            <IconButton
              icon="web"
              color={colors.text}
              size={32}
              onPress={() => console.log('click')}
            />
          </View>
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
        <View
          style={{
            padding: 16,
            backgroundColor: colors.primary,
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
        </View>
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
