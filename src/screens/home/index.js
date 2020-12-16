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
        <View style={{flex: 1, marginTop: 16}}>
          <BigTextGradient />
          <SocialLinks />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            height: 300,
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
              ? [colors.primaryLight, colors.secondaryLight]
              : [colors.primary, colors.secondary]
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
            About Me
          </Text>
          <Caption style={{color: colors.background}}>
            Professionally connected with the development industry and
            information technology for almost 5 years.{'\n'}
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of anime and other japanese stuff
            hobbies.{'\n'}Interested in the entire frontend spectrum and working
            on ambitious projects with positive people.
          </Caption>
          <View style={{height: 22}} />
          <Text
            style={{
              color: colors.background,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            What Can I Do?
          </Text>
          <Caption style={{color: colors.background}}>
            The main area of my expertise is front end development (Mobile App)
            especially React.{'\n'}I have also full-stack developer experience
            with PHP with Laravel, Codeigniter, and sometimes use Firebase for
            serverless project like this app.
            {'\n'}Visit my Linkedin profile for more details or feel free to use
            live chat feature of this app to directly connected to me in a
            second.
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
            I've started my IT Career since 2016, started working as IT Support
            before go to university
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
            Coming soon! I will drop some awesome project here later
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
          <Text style={{color: colors.text}}>That's all</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
