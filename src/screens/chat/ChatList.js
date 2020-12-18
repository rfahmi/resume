import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Divider, List} from 'react-native-paper';
import Header from '../../components/Header';
import {useTheme} from '../../utils/ThemeProvider';

const ChatList = ({route, navigation}) => {
  const {colors} = useTheme();
  const {owner} = route.params;
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [rooms, setRoom] = useState([]); // Initial empty array of rooms

  useEffect(() => {
    console.log(owner);
    const subscriber = firestore()
      .collection('rooms')
      .where('owner', '==', owner)
      .onSnapshot((querySnapshot) => {
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

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Header title="Chat List" />
      <FlatList
        data={rooms}
        style={{backgroundColor: colors.dim}}
        renderItem={({item}) => (
          <>
            <List.Item
              onPress={() => navigation.push('ChatRoom', {_id: item._id})}
              style={{backgroundColor: colors.background}}
              titleStyle={{color: colors.text}}
              descriptionStyle={{color: colors.text}}
              title={item.room_name}
              description={item.last_message}
              left={() => <List.Icon icon="message" color={colors.text} />}
            />
            <Divider />
          </>
        )}
      />
    </>
  );
};

export default ChatList;
