import React from 'react';
import {Text, View} from 'react-native';
import {Caption} from 'react-native-paper';
import {useTheme} from '../../utils/ThemeProvider';

const ResumePortfolios = () => {
  const {colors} = useTheme();
  return (
    <View>
      <Text
        style={{
          color: colors.white,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Portfolios
      </Text>
      <Caption style={{color: colors.white}}>
        Coming soon! I will drop some awesome project here later
      </Caption>
    </View>
  );
};

export default ResumePortfolios;
