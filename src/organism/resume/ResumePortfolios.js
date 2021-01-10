import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Caption} from 'react-native-paper';
import TouchableScale from 'react-native-touchable-scale';
import {SharedElement} from 'react-navigation-shared-element';
import {useTheme} from '../../utils/ThemeProvider';

const ResumePortfolios = () => {
  const navigation = useNavigation();
  const [content, setContent] = useState({width: 0});
  const projects = [
    {
      id: 1,
      pic: require('../../assets/projects/empty.png'),
      name: 'Harnic Online Store',
      caption: 'Online shopping & groceries app',
      desc: 'blah blablbah blah blablbah blah blablbah blah blablbah ',
      techs: ['React Native', 'PHP', 'Ionic', 'MySQL'],
    },
    {
      id: 2,
      pic: require('../../assets/projects/empty.png'),
      name: 'Harnic Courier',
      caption: 'Delivery courier app',
      desc: 'blah blablbah blah blablbah blah blablbah blah blablbah ',
      techs: ['React Native', 'PHP', 'Ionic', 'MySQL'],
    },
    {
      id: 3,
      pic: require('../../assets/projects/empty.png'),
      name: 'ReSH Smart Home',
      caption: 'Smart apartment integrated with Tuya Platform',
      desc: 'blah blablbah blah blablbah blah blablbah blah blablbah ',
      techs: ['React Native', 'PHP', 'Ionic', 'MySQL'],
    },
    {
      id: 4,
      pic: require('../../assets/projects/empty.png'),
      name: 'Deli Sales Portal',
      caption: 'ReSH Smart Home',
      desc: 'blah blablbah blah blablbah blah blablbah blah blablbah ',
      techs: ['jQuery', 'PHP', 'MySQL'],
    },
  ];
  const {colors} = useTheme();
  return (
    <View>
      <Text
        style={{
          color: colors.white,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        My Works
      </Text>
      <Caption style={{color: colors.white}}>
        I've created some demo app, feel free to visit my Google Play Store
        page. Or you can check some of my real project bellow instead :)
      </Caption>
      <FlatList
        data={projects}
        onLayout={(event) => {
          setContent(event.nativeEvent.layout);
        }}
        style={{marginTop: 16}}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item}) => (
          <TouchableScale
            onPress={() => navigation.push('Portfolio', {data: item})}
            style={{margin: 4}}
            activeScale={0.9}>
            <View collapsable={false}>
              <SharedElement id={`project${item.id}image`}>
                <Image
                  resizeMode="cover"
                  style={{
                    height: content.width / 2 - 8,
                    aspectRatio: 1 / 1,
                    borderRadius: 10,
                  }}
                  source={item.pic}
                />
              </SharedElement>
              <View
                collapsable={false}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 6,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                }}>
                <SharedElement id={`project${item.id}title`}>
                  <Text style={{fontSize: 11}} numberOfLines={1}>
                    {item.name}
                  </Text>
                </SharedElement>
              </View>
            </View>
          </TouchableScale>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ResumePortfolios;
