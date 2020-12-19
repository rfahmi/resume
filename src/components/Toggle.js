import React, {useRef, useState, memo} from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import {useTheme} from '../utils/ThemeProvider';

const Toggle = ({
  onPress,
  initialState,
  onText = 'TRUE',
  offText = 'FALSE',
}) => {
  const animation = useRef(new Animated.Value(!!initialState ? 1 : 0)).current;
  const [toggled, setToggled] = useState(!!initialState);
  const [containerWidth, setContainerWidth] = useState(0);
  const {colors} = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setToggled(!toggled);
        Animated.timing(animation, {
          duration: 300,
          toValue: +!toggled,
        }).start();
        onPress();
      }}>
      <Animated.View
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => setContainerWidth(width)}
        style={dynamicStyles.container(animation, colors)}>
        <Animated.Text style={dynamicStyles.text(animation, colors)}>
          {toggled ? onText : offText}
        </Animated.Text>
        <Animated.View
          style={[
            {
              flex: 1,
              width: containerWidth,
              padding: 4,
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, containerWidth - 40],
                  }),
                },
              ],
            },
          ]}>
          <View
            style={{
              backgroundColor: colors.background,
              height: 32,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 8,
              aspectRatio: 1 / 1,
              position: 'relative',
              borderRadius: 50,
              elevation: 6,
            }}>
            <Animated.Image
              style={[{flex: 1, resizeMode: 'contain'}]}
              source={
                toggled
                  ? require('../assets/icons/sun.png')
                  : require('../assets/icons/moon.png')
              }
            />
          </View>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const dynamicStyles = {
  container: (animation, colors) => ({
    alignItems: 'center',
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.dim, colors.dim],
    }),
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 57,
  }),
  text: (animation, colors) => ({
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text,
    left: 0,
    right: 0,
    textAlign: 'center',
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [20, -20],
        }),
      },
    ],
  }),
};

export default memo(Toggle);
