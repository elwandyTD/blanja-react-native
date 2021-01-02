import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from '../styles/splashScreenStyle';

import BagIcon from '../assets/icons/bag.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const goHome = setTimeout(() => {
      navigation.replace('Home');
    }, 1500);

    return () => {
      clearTimeout(goHome);
    };
  });
  return (
    <View style={styles.container}>
      <Image style={styles.bag} source={BagIcon} />
    </View>
  );
};

export default SplashScreen;
