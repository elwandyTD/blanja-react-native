import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';

// import bagStyle from '../styles/bagStyle';
// import authStyles from '../styles/authStyle';
import {getActiveAddress} from '../public/redux/actionCreators/profile';
import styles from '../styles/checkoutStyle';
import MasterCard from '../assets/icons/mastercard.png';
import PosIndo from '../assets/icons/pos-indonesia.png';
import GoPay from '../assets/icons/gopay.png';

import Header from '../components/Header';

export class Checkout extends Component {
  state = {
    test: false,
    address: {},
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
          this.setState({address: active.data});
        }
      }
    } catch (e) {
      console.log(e);
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

const mapsStateToProps = ({profile}) => {
  return {
    profile,
  };
};

export default connect(mapsStateToProps)(Checkout);
