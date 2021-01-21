import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';

import {
  addUserAddress,
  updateUserAddress,
} from '../public/redux/actionCreators/profile';
import authStyle from '../styles/authStyle';
import styles from '../styles/addShippingAddressStyle';
import MyHeader from '../components/Header';

export class AddShippingAddress extends Component {
  state = {
    error: '',
    onTyping: false,
    address: {
      user_id: this.props.route.params.id,
      title: '',
      recipient: '',
      address: '',
      city: '',
      province: '',
      recipient_number: '',
      zip_code: '',
      country: 'Indonesia',
    },
  };

  handleInput = (value, name) => {
    this.setState({
      address: {
        ...this.state.address,
        [name]: value,
      },
    });
  };

  onSubmit = async () => {
    const {dispatch} = this.props;
    const {type, item} = this.props.route.params;
    const address = this.state.address;
    if (type === 'Insert') {
      await dispatch(addUserAddress(address));
      const {insert} = this.props.profile;

      if (insert.status === 200) {
        this.props.navigation.push('Shipping Address');
      }
    } else {
      if (!address.title) {
        delete address.title;
      }
      if (!address.recipient) {
        delete address.recipient;
      }
      if (!address.recipient_number) {
        delete address.recipient_number;
      }
      if (!address.address) {
        delete address.address;
      }
      if (!address.city) {
        delete address.city;
      }
      if (!address.province) {
        delete address.province;
      }
      if (!address.zip_code) {
        delete address.zip_code;
      }
      if (!address.country) {
        delete address.country;
      }
      // console.log(address);
      await dispatch(updateUserAddress(item.id, address));
      const {update} = this.props.profile;

      if (update.status === 200) {
        // this.props.navigation.pop();
        this.props.navigation.push('Shipping Address');
      }
    }
  };

  render() {
    const {type, item} = this.props.route.params;
    return (
      <>
        <MyHeader
          title={`${type === 'Insert' ? 'Adding' : 'Change'} Shipping Address`}
        />
        <ScrollView style={styles.container}>
          {/* <View style={authStyle.formSection}> */}
          {/* <Text style={authStyle.infoTextError}>{this.state.error}</Text> */}
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Save address as</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={item.title ? item.title : 'address name ...'}
              value={this.state.address.title}
              onChangeText={(e) => this.handleInput(e, 'title')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Recipient name</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={item.recipient ? item.recipient : 'person name ...'}
              value={this.state.address.recipient}
              onChangeText={(e) => this.handleInput(e, 'recipient')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Recipient number</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={
                item.recipient_number
                  ? item.recipient_number.toString()
                  : 'person number ...'
              }
              keyboardType="numeric"
              value={this.state.address.recipient_number}
              onChangeText={(e) => this.handleInput(e, 'recipient_number')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Full address</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={item.address ? item.address : 'full address ...'}
              value={this.state.address.address}
              onChangeText={(e) => this.handleInput(e, 'address')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>City</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={item.city ? item.city : 'city name ...'}
              value={this.state.address.city}
              onChangeText={(e) => this.handleInput(e, 'city')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>State/Province/Region</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={
                item.province ? item.province : 'your state/province ...'
              }
              value={this.state.address.province}
              onChangeText={(e) => this.handleInput(e, 'province')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Zip Code (Postal Code)</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={
                item.zip_code ? item.zip_code.toString() : 'your zip code ...'
              }
              keyboardType="numeric"
              value={this.state.address.zip_code}
              onChangeText={(e) => this.handleInput(e, 'zip_code')}
            />
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Country</Text>
            <Picker
              selectedValue={
                item.country ? item.country : this.state.address.country
              }
              // style={styles.secOpt}
              onValueChange={(itemValue, _) =>
                this.setState({
                  address: {
                    ...this.state.address,
                    country: itemValue,
                  },
                })
              }>
              <Picker.Item label="Indonesia" value="Indonesia" />
              <Picker.Item
                label="United State America"
                value="United State America"
              />
              <Picker.Item label="Germany" value="Germany" />
              <Picker.Item label="Japan" value="Japan" />
            </Picker>
          </View>
          <TouchableOpacity
            style={{...authStyle.btnAuth, ...{marginBottom: 50}}}
            onPress={this.onSubmit}>
            <Text style={authStyle.btnAuthText}>SAVE ADDRESS</Text>
          </TouchableOpacity>
          {/* </View> */}
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

export default connect(mapsStateToProps)(AddShippingAddress);
