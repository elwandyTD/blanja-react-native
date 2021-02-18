import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
// import {BoxShadow} from 'react-native-shadow';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getUserAddress,
  deleteUserAddress,
} from '../public/redux/actionCreators/profile';
import checkoutStyle from '../styles/checkoutStyle';
import styles from '../styles/shippingAddressStyle';

import Header from '../components/Header';

export class ShippingAdress extends Component {
  state = {
    address: [],
    user: {},
  };

  getUserAddressDispatch = async () => {
    const {
      dispatch,
      auth: {
        user: {data},
      },
    } = this.props;
    console.log(this.props.auth.user.data.user_id);
    await dispatch(getUserAddress(data.user_id));
    const {address} = this.props.profile;

    if (typeof address.data !== 'string') {
      this.setState({
        user: data,
      });
    }
  };

  deleteAddress = async (id) => {
    const {
      dispatch,
      auth: {
        user: {
          data: {user_id},
        },
      },
    } = this.props;
    // console.log(this.props.auth.user, 'Auth');
    await dispatch(deleteUserAddress(id));
    const {remove} = this.props.profile;
    console.log(remove);
    dispatch(getUserAddress(user_id));
  };

  componentDidMount() {
    this.getUserAddressDispatch();
  }

  render() {
    const {address} = this.props.profile;
    return (
      <>
        <Header title="Shipping Address" />
        <ScrollView style={styles.container}>
          <Text style={checkoutStyle.titleInfo}>Your Shipping Address</Text>
          {address.data ? (
            typeof address.data === 'string' ? (
              <Text style={{marginBottom: 10}}>
                You don't have address, please add one first
              </Text>
            ) : (
              address.data.map((item, i) => {
                return (
                  <View key={i} style={checkoutStyle.shippingCart}>
                    <View style={checkoutStyle.rowInfo}>
                      <Text style={checkoutStyle.infoText}>
                        {item.recipient}
                      </Text>
                      <View style={styles.confItems}>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.push(
                              'Update Shipping Address',
                              {
                                id: this.state.user.user_id,
                                item: item,
                              },
                            )
                          }>
                          <Text
                            style={{
                              ...checkoutStyle.infoText,
                              ...{color: '#DB3022'},
                            }}>
                            Edit
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => this.deleteAddress(item.id)}>
                          <Text
                            style={{
                              ...checkoutStyle.infoText,
                              ...{color: '#DB3022'},
                            }}>
                            Delete
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={checkoutStyle.infoText}>{item.address}</Text>
                  </View>
                );
              })
            )
          ) : (
            <Text>Loading</Text>
          )}
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push('Add Shipping Address', {
                id: this.state.user.user_id,
                item: {},
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

const mapsStateToProps = ({profile, auth}) => {
  return {
    auth,
    profile,
  };
};

export default connect(mapsStateToProps)(ShippingAdress);
