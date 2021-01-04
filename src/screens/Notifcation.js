import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

import styles from '../styles/notificationStyle';
import NotFound from '../assets/icons/not-found.png';
import Header from '../components/Header';

const Notifcation = () => {
  return (
    <>
      <Header title="Notification" />
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Image source={NotFound} style={styles.image} />
        <Text style={styles.textNotif}>No notification yet</Text>
      </View>
    </>
  );
};

export default Notifcation;
