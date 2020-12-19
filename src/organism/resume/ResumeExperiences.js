import React from 'react';
import {Text, View} from 'react-native';
import {Caption} from 'react-native-paper';
import ExperienceTimeline from '../../components/ExperienceTimeline';
import {useTheme} from '../../utils/ThemeProvider';

const ResumeExperiences = () => {
  const {colors} = useTheme();
  return (
    <View>
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
      <ExperienceTimeline />
    </View>
  );
};

export default ResumeExperiences;
