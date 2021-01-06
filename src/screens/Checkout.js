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
        <View style={bagStyle.bottomContainer}>
          <View style={bagStyle.changeInfoSect}>
            <Text style={bagStyle.textTotalPrice}>Order: </Text>
            <Text style={bagStyle.numTotalPrice}>112$</Text>
          </View>
          <View style={bagStyle.changeInfoSect}>
            <Text style={bagStyle.textTotalPrice}>Delivery: </Text>
            <Text style={bagStyle.numTotalPrice}>15$</Text>
          </View>
          <View style={bagStyle.changeInfoSect}>
            <Text style={styles.summaryText}>Summary: </Text>
            <Text style={styles.summaryPrice}>127$</Text>
          </View>
          <TouchableOpacity
            style={{...authStyles.btnAuth, ...{marginTop: 0}}}
            onPress={
              () => console.log('checkout')
              // this.props.navigation.navigate('Catalog', {title: 'Show All'})
            }>
            <Text style={authStyles.btnAuthText}>SUBMIT ORDER</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Checkout;
