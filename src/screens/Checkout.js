import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import bagStyle from '../styles/bagStyle';
import authStyles from '../styles/authStyle';
import styles from '../styles/checkoutStyle';

import Header from '../components/Header';

export class Checkout extends Component {
  render() {
    return (
      <>
        <Header title="Checkout" />
        <ScrollView style={styles.container}>
          <View style={styles.infoAddress}>
            <Text style={styles.titleInfo}>Shipping Addres</Text>
            <View style={styles.shippingCart}>
              <View style={styles.rowInfo}>
                <Text style={styles.infoText}>Jane Doe</Text>
                <Text style={{...styles.infoText, ...{color: '#DB3022'}}}>
                  Change
                </Text>
              </View>
              <Text style={styles.infoText}>
                3 Newbridge Court Chino Hills, CA 91709, United States
              </Text>
            </View>
            <View style={styles.infoPayment}>
              <Text style={styles.titleInfo}>Payment</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View>
            <View style={styles.changeInfoSect}>
              <Text style={styles.textTotalPrice}>Order: </Text>
              <Text style={styles.numTotalPrice}>112$</Text>
            </View>
          </View>
          <View style={styles.changeInfoSect}>
            <Text style={styles.textTotalPrice}>Delivery: </Text>
            <Text style={styles.numTotalPrice}>15$</Text>
          </View>
          <View style={styles.changeInfoSect}>
            <Text style={styles.summaryText}>Summary: </Text>
            <Text style={styles.summaryPrice}>127$</Text>
          </View>
          <TouchableOpacity
            style={styles.btnAuth}
            onPress={() => this.props.navigation.navigate('Success')}>
            <Text style={styles.btnAuthText}>SUBMIT ORDER</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Checkout;
