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
          <Text style={{...profileStyle.title, ...{marginBottom: 20}}}>
            My Orders
          </Text>
          <View>
            <View style={profileStyle.linkCard}>
              <View style={profileStyle.linkItem}>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  Order №1947034
                </Text>
                <Text style={styles.textFirst}>05-12-2019</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Tracking number: </Text>
                <Text style={styles.textLast}>IW3475453455</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Quantity: </Text>
                <Text style={styles.textLast}>3</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Total Amount: </Text>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  122$
                </Text>
              </View>
              <View style={styles.rowEnd}>
                <Text style={{...styles.textFirst, ...{color: '#2AA952'}}}>
                  Delivered
                </Text>
              </View>
            </View>
            <View style={profileStyle.linkCard}>
              <View style={profileStyle.linkItem}>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  Order №1947034
                </Text>
                <Text style={styles.textFirst}>05-12-2019</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Tracking number: </Text>
                <Text style={styles.textLast}>IW3475453455</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Quantity: </Text>
                <Text style={styles.textLast}>3</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Total Amount: </Text>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  122$
                </Text>
              </View>
              <View style={styles.rowEnd}>
                <Text style={{...styles.textFirst, ...{color: '#2AA952'}}}>
                  Delivered
                </Text>
              </View>
            </View>
            <View style={profileStyle.linkCard}>
              <View style={profileStyle.linkItem}>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  Order №1947034
                </Text>
                <Text style={styles.textFirst}>05-12-2019</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Tracking number: </Text>
                <Text style={styles.textLast}>IW3475453455</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Quantity: </Text>
                <Text style={styles.textLast}>3</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Total Amount: </Text>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  122$
                </Text>
              </View>
              <View style={styles.rowEnd}>
                <Text style={{...styles.textFirst, ...{color: '#2AA952'}}}>
                  Delivered
                </Text>
              </View>
            </View>
            <View style={profileStyle.linkCard}>
              <View style={profileStyle.linkItem}>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  Order №1947034
                </Text>
                <Text style={styles.textFirst}>05-12-2019</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Tracking number: </Text>
                <Text style={styles.textLast}>IW3475453455</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Quantity: </Text>
                <Text style={styles.textLast}>3</Text>
              </View>
              <View style={styles.rowStart}>
                <Text style={styles.textFirst}>Total Amount: </Text>
                <Text style={{...styles.textLast, ...{fontSize: 16}}}>
                  122$
                </Text>
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
