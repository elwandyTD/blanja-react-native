import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import profileStyle from '../styles/profileStyle';
import styles from '../styles/myOrdersStyle';

import Navbar from '../components/Header';

export class MyOrders extends Component {
  render() {
    return (
      <>
        <Navbar title=" " />
        <ScrollView style={profileStyle.container}>
          <Text style={profileStyle.title}>My profile</Text>
          <View>
            <View>
              <View style={profileStyle.linkItem}>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  Order
                </Text>
                <Text style={styles.textFirst}>Tanggal</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>ts: </Text>
                <Text style={styles.textLast}>MW</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>ts: </Text>
                <Text style={styles.textLast}>MW</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>ts: </Text>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>MW</Text>
              </View>
              <View style={styles.rowEnd}>
                <Text style={{...styles.textFirst, ...{color: '#2AA952'}}}>
                  Delivered
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default MyOrders;
