import React from 'react';
import {Text, View} from 'react-native';
import {Caption} from 'react-native-paper';
import {useTheme} from '../../utils/ThemeProvider';

const ResumeAboutMe = () => {
  const {colors} = useTheme();
  const date = new Date();
  const current_year = date.getFullYear();
  const age = current_year - 2016;
  return (
    <View>
      <Text
        style={{
          color: colors.white,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        About Me
      </Text>
      <Caption style={{color: colors.white}}>
        Professionally connected with the development industry and information
        technology for about {age} years.{'\n'}
        Well-organized person, problem solver, independent employee with high
        attention to detail. Fan of anime and other japanese stuff hobbies.
        {'\n'}Interested in the entire frontend spectrum and working on
        ambitious projects with positive people.
      </Caption>
    </View>
  );
};

export default ResumeAboutMe;
