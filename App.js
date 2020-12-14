import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './src/utils/ThemeProvider';
import RootStack from './src/configs/navigation';
const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1100BB',
    },
  };
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
