import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {Button, Divider, List} from 'react-native-paper';
import {RNToasty} from 'react-native-toasty';
import Header from '../../components/Header';
import {useTheme} from '../../utils/ThemeProvider';

const chatsRef = firestore().collection('chats');
const Inbox = ({navigation}) => {
  const {colors, isDark} = useTheme();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [rooms, setRoom] = useState([]); // Initial empty array of rooms

  GoogleSignin.configure({
    offlineAccess: false,
    webClientId:
      '572854027072-8i8vpbm1jlg6hufsap9uuanb0ak796fu.apps.googleusercontent.com',
    // androidClientId:
    //   '572854027072-o6m4gk8q404g2gmcn76suhrbk8u1v6v5.apps.googleusercontent.com',
  });

  // Handle user state changes
  function onAuthStateChanged(u) {
    if (u && u.email === 'mn.imhafr@gmail.com') {
      setUser(u);
    }
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const subscriber = chatsRef.onSnapshot((querySnapshot) => {
      const rooms_temp = [];

      querySnapshot.forEach((documentSnapshot) => {
        rooms_temp.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setRoom(rooms_temp);
      setLoading(false);
    });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  if (loading) {
    return (
      <>
        <Header title="Administrator" />
        <View
          style={{
            flex: 1,
            marginHorizontal: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={{marginTop: 16, color: colors.text}}>
            Opening secure connection...
          </Text>
        </View>
      </>
    );
  }

  if (initializing) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          <Header title="Chats" />
          <FlatList
            data={rooms}
            style={{backgroundColor: colors.dim}}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  aspectRatio: 1 / 1,
                  marginHorizontal: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{flex: 1}}
                  source={
                    isDark
                      ? require('../../assets/images/empty_dark.png')
                      : require('../../assets/images/empty.png')
                  }
                  resizeMode="contain"
                />
                <Text
                  style={{
                    marginTop: 16,
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: colors.text,
                  }}>
                  No Chats for Now
                </Text>
              </View>
            )}
            renderItem={({item}) => (
              <>
                <List.Item
                  onPress={() =>
                    navigation.push('AdministratorChatRoom', {
                      chat: item,
                      host: true,
                    })
                  }
                  style={{backgroundColor: colors.background}}
                  titleStyle={{color: colors.text}}
                  descriptionStyle={{color: colors.text}}
                  title={item.name}
                  left={() => <List.Icon icon="message" color={colors.text} />}
                />
                <Divider />
              </>
            )}
          />
        </>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.danger,
            justifyContent: 'center',
          }}>
          <Header title="Chats" transparent />
          <View
            style={{
              flex: 1,
              marginHorizontal: 24,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 36,
                fontWeight: 'bold',
                marginBottom: 16,
              }}>
              Special Access Required!
            </Text>
            <View>
              <Button
                icon="google"
                mode="contained"
                color={colors.dangerDark}
                contentStyle={{height: 50}}
                onPress={() =>
                  onGoogleButtonPress().then((e) => {
                    if (e.user.email === 'mn.imhafr@gmail.com') {
                      RNToasty.Success({
                        title: 'Welcome Back ' + e.user.displayName,
                      });
                    } else {
                      RNToasty.Error({
                        title: "Oopps! your account don't have access",
                      });
                    }
                  })
                }>
                Continue with Google
              </Button>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Inbox;
