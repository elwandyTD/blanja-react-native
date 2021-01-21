import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from '../styles/successStyle';
import BagImage from '../assets/icons/bag-success.png';

const Success = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Image source={BagImage} style={styles.image} />
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.sub}>
          Your order will be delivered soon. Thank you for choosing our app!
        </Text>
        <TouchableOpacity
          style={styles.btnAuth}
          onPress={() => navigation.push('Home')}>
          <Text style={styles.btnAuthText}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;
