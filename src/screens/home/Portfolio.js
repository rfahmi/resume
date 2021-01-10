import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, StatusBar, View} from 'react-native';
import {Caption, Chip, Paragraph} from 'react-native-paper';
import {SharedElement} from 'react-navigation-shared-element';
import HeaderBackTransparent from '../../components/HeaderBackTransparent';
import {useTheme} from '../../utils/ThemeProvider';

const Portfolio = ({route}) => {
  const {data} = route.params;
  const scroll = useRef(new Animated.Value(0)).current;
  const cardPosition = useRef(new Animated.Value(0)).current;
  const {colors} = useTheme();
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  const WINDOW_WIDTH = Dimensions.get('window').width;

  useEffect(() => {
    Animated.timing(cardPosition, {
      toValue: 100,
      duration: 400,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderBackTransparent />
      <View collapsable={false}>
        <SharedElement
          id={`project${data.id}image`}
          style={{position: 'absolute', top: 0}}>
          <Animated.Image
            style={{
              width: WINDOW_WIDTH,
              height: WINDOW_WIDTH,
              opacity: scroll.interpolate({
                inputRange: [0, 400],
                outputRange: [1, 0],
              }),
              transform: [
                {
                  scale: scroll.interpolate({
                    inputRange: [0, 200],
                    outputRange: [1, 1.05],
                  }),
                },
                {
                  translateY: scroll.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -10],
                  }),
                },
              ],
            }}
            source={data.pic}
            resizeMode="cover"
          />
        </SharedElement>
      </View>
      <Animated.ScrollView
        style={{paddingTop: 50}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <Animated.View
          style={{
            height: WINDOW_WIDTH - 50,
          }}
        />
        <Animated.View
          style={{
            backgroundColor: colors.background,
            padding: 16,
            borderRadius: 14,
            margin: 16,
            elevation: 8,
            height: WINDOW_HEIGHT - 100,
            transform: [
              {
                translateY: cardPosition.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -50],
                }),
              },
            ],
          }}>
          <View collapsable={false}>
            <SharedElement id={`project${data.id}title/`}>
              <Animated.Text
                style={{
                  color: colors.text,
                  fontSize: 22,
                  fontWeight: 'bold',
                  transform: [
                    {
                      scale: scroll.interpolate({
                        inputRange: [0, 200],
                        outputRange: [1, 1.1],
                      }),
                    },
                    {
                      translateX: scroll.interpolate({
                        inputRange: [0, 200],
                        outputRange: [0, 14],
                      }),
                    },
                  ],
                }}>
                {data.name}
              </Animated.Text>
            </SharedElement>
          </View>
          <Caption style={{color: colors.text}}>{data.caption}</Caption>
          <View
            style={{
              marginVertical: 16,
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            {data.techs.map((i) => (
              <Chip key={i} style={{margin: 2}}>
                {i}
              </Chip>
            ))}
          </View>
          <Paragraph style={{marginVertical: 8, color: colors.textSmooth}}>
            {data.desc}
          </Paragraph>
          <Caption style={{color: colors.text, marginTop: 50}}>
            {'\u00a9'} Credit to: {data.credit}
          </Caption>
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
};
export default Portfolio;
