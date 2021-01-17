import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getUserAddress} from '../public/redux/actionCreators/profile';
import checkoutStyle from '../styles/checkoutStyle';
import styles from '../styles/shippingAddressStyle';

import Header from '../components/Header';

export class ShippingAdress extends Component {
  state = {
    address: [],
    user: {},
  };

  getUserAddressDispatch = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      if (jsonValue !== null) {
        const user = JSON.parse(jsonValue);
        const {dispatch} = this.props;

        await dispatch(getUserAddress(user.user_id));
        const {address} = this.props.profile;

        if (address.data) {
          this.setState({
            address: address.data,
            user,
          });
        }
        console.log(this.state.address);
      }
    } catch (e) {
      console.log(e);
    }
    // const { dispatch } = this.props;

    // await dispatch(getUserAddress);
  };

  componentDidMount() {
    this.getUserAddressDispatch();
  }

  render() {
    return (
      <>
        <Header title="Shipping Address" />
        <ScrollView style={styles.container}>
          <Text style={checkoutStyle.titleInfo}>Shipping Addres</Text>
          {this.state.address.map((item, i) => {
            return (
              <View key={i} style={checkoutStyle.shippingCart}>
                <View style={checkoutStyle.rowInfo}>
                  <Text style={checkoutStyle.infoText}>{item.recipient}</Text>
                  <Text
                    style={{...checkoutStyle.infoText, ...{color: '#DB3022'}}}>
                    Change
                  </Text>
                </View>
                <Text style={checkoutStyle.infoText}>{item.address}</Text>
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push('Add Shipping Address', {
                id: this.state.user.user_id,
              })
            }
            style={styles.btnAddress}>
            <Text style={styles.btnAddressText}>ADD NEW ADDRESS</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}

const mapsStateToProps = ({profile}) => {
  return {
    profile,
  };
};

export default connect(mapsStateToProps)(ShippingAdress);
