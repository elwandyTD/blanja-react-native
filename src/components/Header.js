import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import styles from '../styles/headerStyle';
import ArrowLeft from '../assets/icons/arr-left.png';

const MyHeader = ({title}) => {
  const navigation = useNavigation();

  const LogoLeft = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.pop()}
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
      />
    </>
  );
};

export default MyHeader;
