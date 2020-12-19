import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {Caption} from 'react-native-paper';
import {useTheme} from '../../utils/ThemeProvider';

const ResumeSkills = () => {
  const {colors} = useTheme();
  return (
    <View>
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
        especially React.{'\n'}I have also full-stack developer experience with
        PHP with Laravel, Codeigniter, and sometimes use Firebase for serverless
        project like this app.
      </Caption>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: 'rgba(255,255,255,0.3)',
          borderRadius: 6,
          marginVertical: 16,
        }}>
        <Image
          source={require('../../assets/icons/react.png')}
          style={{width: 72, height: 72}}
        />
        <Image
          source={require('../../assets/icons/firebase.png')}
          style={{width: 72, height: 72}}
        />
        <Image
          source={require('../../assets/icons/laravel.png')}
          style={{width: 72, height: 72}}
        />
        <Image
          source={require('../../assets/icons/ionic.png')}
          style={{width: 72, height: 72}}
        />
        <Image
          source={require('../../assets/icons/mysql.png')}
          style={{width: 72, height: 72}}
        />
      </ScrollView>
    </View>
  );
};

export default ResumeSkills;
