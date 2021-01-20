import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';

// import bagStyle from '../styles/bagStyle';
// import authStyles from '../styles/authStyle';
import {postTransaction} from '../public/redux/actionCreators/transaction';
import {getActiveAddress} from '../public/redux/actionCreators/profile';
import styles from '../styles/checkoutStyle';
import MasterCard from '../assets/icons/mastercard.png';
import PosIndo from '../assets/icons/pos-indonesia.png';
import GoPay from '../assets/icons/gopay.png';

import Header from '../components/Header';

export class Checkout extends Component {
  state = {
    address: {},
    mastercard: true,
    pos: false,
    gopay: false,
    method: 'Mastercard',
    user: {},
  };

  getActiveAddressUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      if (jsonValue !== null) {
        const user = JSON.parse(jsonValue);
        const {dispatch} = this.props;

        await dispatch(getActiveAddress(user.user_id, user.id_address));
        const {active} = this.props.profile;

        if (active.data) {
          this.setState({address: active.data, user});
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  updatePaymentMethod = (newValue, type, method) => {
    if (newValue) {
      this.setState({
        mastercard: type === 'm' ? true : false,
        pos: type === 'p' ? true : false,
        gopay: type === 'g' ? true : false,
        method,
      });
    } else {
      this.setState({
        mastercard: false,
        pos: false,
        gopay: false,
      });
    }
  };

  getCheckout = async () => {
    const checkout = this.props.route.params.checkout;
    const dispatch = this.props.dispatch;
    const {user, address, method} = this.state;

    const newCheckout = {
      ...checkout,
      user_id: user.user_id,
      method,
      address: address.address,
    };

    await dispatch(postTransaction(newCheckout));
    const {post} = this.props.transaction;
    if (post.msg) {
      await AsyncStorage.setItem('@bag', JSON.stringify([]));
      this.props.navigation.navigate('Success');
    }
  };

  componentDidMount() {
    this.getActiveAddressUser();
  }

  render() {
    return (
      <>
        <Header title="Checkout" />
        <ScrollView style={styles.container}>
          <View style={styles.infoAddress}>
            <Text style={styles.titleInfo}>Shipping Addres</Text>
            <View style={styles.shippingCart}>
              <View style={styles.rowInfo}>
                <Text style={styles.infoText}>
                  {this.state.address.recipient}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Shipping Address')
                  }>
                  <Text style={{...styles.infoText, ...{color: '#DB3022'}}}>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.infoText}>{this.state.address.address}</Text>
              {/* <Text style={styles.infoText}>{this.state.address.city}</Text> */}
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
                    value={this.state.mastercard}
                    onValueChange={(newValue) =>
                      this.updatePaymentMethod(newValue, 'm', 'Mastercard')
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
                    value={this.state.pos}
                    onValueChange={(newValue) =>
                      this.updatePaymentMethod(newValue, 'p', 'Pos Indonesia')
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
                    value={this.state.gopay}
                    onValueChange={(newValue) =>
                      this.updatePaymentMethod(newValue, 'g', 'GoPay')
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
          <TouchableOpacity style={styles.btnAuth} onPress={this.getCheckout}>
            {/* onPress={() => this.props.navigation.navigate('Success')}> */}
            <Text style={styles.btnAuthText}>SUBMIT ORDER</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const mapsStateToProps = ({profile, transaction}) => {
  return {
    profile,
    transaction,
  };
};

export default connect(mapsStateToProps)(Checkout);
