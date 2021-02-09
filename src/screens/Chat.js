import React, {useEffect, useState} from 'react';
import {Text, TextInput, Button, View, ScrollView} from 'react-native';
import {io} from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyHeader from '../components/Header';
import styles from '../styles/chatStyle';

const Chat = ({route}) => {
  const [socketIo, setSocketIo] = useState();
  const [message, setMessage] = useState([]);
  const [text, setText] = useState('');
  const room_id =
    route.params.user.level === 'customer'
      ? `message_${route.params.user.user_id}_6`
      : 'message_11_6';
  const {user_id, level, user_name} = route.params.user;

  const getMessage = async () => {
    const messages = await AsyncStorage.getItem(room_id);
    if (messages !== null) {
      setMessage(JSON.parse(messages));
    } else {
      await AsyncStorage.setItem(room_id, JSON.stringify([]));
    }
  };

  getMessage();

  const send = async () => {
    // const {user_id, level} = route.params.user;
    const data = {
      user_id,
      level,
      user_name,
      text,
    };
    socketIo.emit('new-data', data);
    await AsyncStorage.setItem(room_id, JSON.stringify([...message, data]));
    setText('');
  };

  useEffect(() => {
    // const {user_id, level} = route.params.user;
    const socket = io('http://192.168.43.216:8001', {
      query: {
        id: user_id,
        room: room_id,
        level,
      },
    });

    socket.on('message', (data) => {
      console.log(data);
    });

    socket.on('refreshing-data', (datum) => {
      console.log(datum);
    });

    setSocketIo(socket);

    return () => socket.close();
  }, [user_id, level, room_id]);

  return (
    <>
      <MyHeader title="Chat" />
      <ScrollView style={styles.container}>
        {message.map((item, i) => {
          return (
            <View
              key={i}
              style={
                item.user_id === user_id ? styles.textBox2 : styles.textBox1
              }>
              <Text
                style={item.user_id === user_id ? styles.text2 : styles.text1}>
                {item.text}
              </Text>
              <Text
                style={
                  item.user_id === user_id ? styles.title2 : styles.title1
                }>
                {item.user_id === user_id ? 'You' : item.user_name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bottomArea}>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={(e) => setText(e)}
        />
        <Button title="Send" onPress={send} />
      </View>
    </>
  );
};

export default Chat;
