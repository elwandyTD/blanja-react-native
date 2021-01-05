import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import styles from '../styles/headerStyle';
import ArrowLeft from '../assets/icons/arr-left.png';

const MyHeader = ({title, component, routeToTop = false}) => {
  const navigation = useNavigation();

  const LogoLeft = () => {
    return (
      <TouchableOpacity
        onPress={() => (routeToTop ? navigation.popToTop() : navigation.pop())}
        style={styles.btnArrow}>
        <Image style={styles.arrBack} source={ArrowLeft} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header
        barStyle="default"
        containerStyle={styles.containerStyle}
        leftComponent={LogoLeft}
        centerComponent={<Text style={styles.centerTitle}>{title}</Text>}
        rightComponent={component ? component : <View />}
      />
    </>
  );
};

export default MyHeader;
