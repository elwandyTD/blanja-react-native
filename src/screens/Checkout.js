import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

// import bagStyle from '../styles/bagStyle';
// import authStyles from '../styles/authStyle';
import styles from '../styles/checkoutStyle';
import MasterCard from '../assets/icons/mastercard.png';
import PosIndo from '../assets/icons/pos-indonesia.png';
import GoPay from '../assets/icons/gopay.png';

import Header from '../components/Header';

export class Checkout extends Component {
  state = {
    test: false,
    user: {},
  };

  getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      return jsonValue != null
        ? this.setState({
            user: JSON.parse(jsonValue),
          })
        : null;
    } catch (e) {
      console.log(e);
    }
  };

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
              <View style={styles.containerPayment}>
                <View style={styles.paymentItem}>
                  <View style={styles.paymentSec}>
                    <View style={styles.paymentSecImg}>
                      <Image source={MasterCard} style={styles.paymentImg1} />
                    </View>
                    <Text style={styles.paymentText}>Mastercard</Text>
                  </View>
                  <CheckBox
                    disabled={false}
                    value={this.state.test}
                    onValueChange={(newValue) =>
                      this.setState({test: newValue})
                    }
                  />
                </View>
                <View style={styles.paymentItem}>
                  <View style={styles.paymentSec}>
                    <View style={styles.paymentSecImg}>
                      <Image source={PosIndo} style={styles.paymentImg2} />
                    </View>
                    <Text style={styles.paymentText}>Pos Indonesia</Text>
                  </View>
                  <CheckBox
                    disabled={false}
                    value={this.state.test}
                    onValueChange={(newValue) =>
                      this.setState({test: newValue})
                    }
                  />
                </View>
                <View style={styles.paymentItem}>
                  <View style={styles.paymentSec}>
                    <View style={styles.paymentSecImg}>
                      <Image source={GoPay} style={styles.paymentImg3} />
                    </View>
                    <Text style={styles.paymentText}>Gopay</Text>
                  </View>
                  <CheckBox
                    disabled={false}
                    value={this.state.test}
                    onValueChange={(newValue) =>
                      this.setState({test: newValue})
                    }
                  />
                </View>
              </View>
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
