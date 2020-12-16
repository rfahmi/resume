import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RootStack from './src/configs/navigation';
import {ThemeProvider} from './src/utils/ThemeProvider';

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: async function (token) {
    console.log('TOKEN:', token);
    await AsyncStorage.setItem('fcm_token', token.token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

PushNotification.channelExists('ch1', function (exists) {
  if (!exists) {
    PushNotification.createChannel(
      {
        channelId: 'ch1', // (required)
        channelName: 'General', // (required)
        channelDescription: 'General Notification', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }
});

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
