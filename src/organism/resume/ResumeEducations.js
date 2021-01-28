import React from 'react';
import {
  Linking,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Caption} from 'react-native-paper';
import {useTheme} from '../../utils/ThemeProvider';

const ResumeEducations = () => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        Linking.canOpenURL(
          'https://pddikti.kemdikbud.go.id/data_mahasiswa/Njc4NDdFQkQtQTRGOC00MjQwLTkwRkMtQjkzMkYwRDE3Qjc3',
        ).then((a) => {
          if (a) {
            Linking.openURL(
              'https://pddikti.kemdikbud.go.id/data_mahasiswa/Njc4NDdFQkQtQTRGOC00MjQwLTkwRkMtQjkzMkYwRDE3Qjc3',
            );
          } else {
            ToastAndroid.show(
              'Oopps! Cannot found store app',
              ToastAndroid.SHORT,
            );
          }
        })
      }>
      <Text
        style={{
          color: colors.white,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Educations
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Caption style={{flex: 1, color: colors.white}}>
          2021 Sistem Informasi{'\n'}
          STMIK Nusa Mandiri, Jakarta
        </Caption>
        <View>
          <Text style={{color: colors.white}}>GPA</Text>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: colors.white}}>
            3.85
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResumeEducations;
