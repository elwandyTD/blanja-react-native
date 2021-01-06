import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import checkoutStyle from '../styles/checkoutStyle';
import styles from '../styles/shippingAddressStyle';

import Header from '../components/Header';

export class ShippingAdress extends Component {
  render() {
    return (
      <>
        <Header title="Shipping Address" />
        <ScrollView style={styles.container}>
          <Text style={checkoutStyle.titleInfo}>Shipping Addres</Text>
          <View style={checkoutStyle.shippingCart}>
            <View style={checkoutStyle.rowInfo}>
              <Text style={checkoutStyle.infoText}>Jane Doe</Text>
              <Text style={{...checkoutStyle.infoText, ...{color: '#DB3022'}}}>
                Change
              </Text>
            </View>
            <Text style={checkoutStyle.infoText}>
              3 Newbridge Court Chino Hills, CA 91709, United States
            </Text>
          </View>
          <View style={checkoutStyle.shippingCart}>
            <View style={checkoutStyle.rowInfo}>
              <Text style={checkoutStyle.infoText}>Jane Doe</Text>
              <Text style={{...checkoutStyle.infoText, ...{color: '#DB3022'}}}>
                Change
              </Text>
            </View>
            <Text style={checkoutStyle.infoText}>
              3 Newbridge Court Chino Hills, CA 91709, United States
            </Text>
          </View>
          <View style={checkoutStyle.shippingCart}>
            <View style={checkoutStyle.rowInfo}>
              <Text style={checkoutStyle.infoText}>Jane Doe</Text>
              <Text style={{...checkoutStyle.infoText, ...{color: '#DB3022'}}}>
                Change
              </Text>
            </View>
            <Text style={checkoutStyle.infoText}>
              3 Newbridge Court Chino Hills, CA 91709, United States
            </Text>
          </View>
          <TouchableOpacity style={styles.btnAddress}>
            <Text style={styles.btnAddressText}>ADD NEW ADDRESS</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}

export default ShippingAdress;
