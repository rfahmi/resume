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
      pic: require('../../assets/projects/1.jpg'),
      name: 'Harnic Online Store',
      caption: 'Online shopping & groceries app',
      desc:
        'An online shopping app built using React Native. Has standard e-commerce application functions such as product information, add to carts, purchases and also payment gateway support for automatic transaction verification',
      credit: 'PT. Harnic Online Store',
      techs: ['React Native', 'Laravel', 'Ionic', 'MySQL'],
    },
    // {
    //   id: 2,
    //   pic: require('../../assets/projects/empty.png'),
    //   name: 'Harnic Courier',
    //   caption: 'Delivery courier app',
    //   desc: 'Information unavailable right now',
    //   credit: 'PT. Harnic Online Store',
    //   techs: ['React Native', 'Laravel', 'Ionic', 'MySQL'],
    // },
    {
      id: 3,
      pic: require('../../assets/projects/2.jpg'),
      name: 'ReSH Smart Home',
      caption: 'Smart apartment integrated with Tuya Platform',
      desc:
        'App for apartment residents with news features, panic buttons, bill info, and facility booking. Integrated with payment gateways and Tuya Cloud Platform to control smart devices',
      credit: 'PT. Eskanusa Putraco',
      techs: ['React Native', 'Laravel', 'Ionic', 'MySQL', 'FinPay'],
    },
    {
      id: 4,
      pic: require('../../assets/projects/3.jpg'),
      name: 'Deli Sales Portal',
      caption: 'Order portal WebApp for salesman',
      desc:
        'Web app order portal for salesmen. order input, product and stock information, customer registration with digital sign and device GPS Location',
      credit: 'PT. Deli Group Indonesia',
      techs: ['jQuery', 'Codeigniter', 'MySQL'],
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
        page. Or you can check the top {projects.length} of my real project
        bellow instead :)
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
                    backgroundColor: colors.white,
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
                  backgroundColor: 'rgba(0,0,0,0.6)',
                }}>
                <SharedElement id={`project${item.id}title`}>
                  <Text style={{fontSize: 11, color: '#fff'}} numberOfLines={1}>
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
