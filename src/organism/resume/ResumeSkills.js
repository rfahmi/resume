import React from 'react';
import {Text, View} from 'react-native';
import {Caption} from 'react-native-paper';
import SkillCarousel from '../../components/SkillCarousel';
import {useTheme} from '../../utils/ThemeProvider';

const ResumeSkills = () => {
  const {colors} = useTheme();
  return (
    <View>
      <Text
        style={{
          color: colors.white,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        What Can I Do?
      </Text>
      <Caption style={{color: colors.white}}>
        The main area of my expertise is front end development (Mobile App)
        especially React.{'\n'}I have also full-stack developer experience with
        PHP with Laravel, Codeigniter, and sometimes use Firebase for serverless
        project like this app.
      </Caption>
      <SkillCarousel />
    </View>
  );
};

export default ResumeSkills;
