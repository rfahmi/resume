import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from '../../../../screens/home';
import Portfolio from '../../../../screens/home/Portfolio';

const Stack = createSharedElementStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        useNativeDriver: true,
        gestureEnabled: false,
        cardStyleInterpolator: ({current: {progress}}) => {
          return {cardStyle: {opacity: progress}};
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        sharedElementsConfig={(route) => {
          const {data} = route.params;
          return [
            {
              id: `project${data.id}image`,
              animation: 'fade',
            },
            {
              id: `project${data.id}title`,
              animation: 'fade',
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
