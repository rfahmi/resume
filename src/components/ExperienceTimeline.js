import React from 'react';
import {View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import {useTheme} from '../utils/ThemeProvider';

const ExperienceTimeline = () => {
  const {colors} = useTheme();
  const data = [
    {
      time: 'Current',
      title: 'PT. Harnic Online Store',
      description: 'Software Engineer',
    },
    {
      time: '2019',
      title: 'PT. Deli Group Indonesia',
      description: 'Web Developer',
    },
    {
      time: '2018',
      title: 'PT. United Product International Indonesia',
      description: 'IT Support',
    },
  ];
  return (
    <View style={{marginVertical: 16}}>
      <Timeline
        data={data}
        showTime
        separator
        timeStyle={{color: colors.background}}
        timeContainerStyle={{minWidth: 55}}
        titleStyle={{color: colors.background}}
        descriptionStyle={{color: colors.background}}
        lineColor={colors.background}
        // eventContainerStyle={{backgroundColor: 'red', margin: 0}}
        // detailContainerStyle={{backgroundColor: 'yellow', padding: 0}}
        circleColor={colors.background}
      />
    </View>
  );
};

export default ExperienceTimeline;
