import React, {useEffect, Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import styles from '../styles/splashScreenStyle';

import BagIcon from '../assets/icons/bag.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const replaceToHome = setTimeout(() => {
      navigation.replace('Home');
    }, 1500);

    return () => {
      clearTimeout(replaceToHome);
    };
  });
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image style={styles.bag} source={BagIcon} />
    </View>
  );
};

// class SplashScreen extends Component {

// }

export default SplashScreen;
