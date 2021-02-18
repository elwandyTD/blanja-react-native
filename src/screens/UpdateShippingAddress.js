import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';

import {
  updateUserAddress,
  getUserAddress,
} from '../public/redux/actionCreators/profile';
import authStyle from '../styles/authStyle';
import styles from '../styles/addShippingAddressStyle';
import MyHeader from '../components/Header';

class UpdateShippingAddress extends Component {
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
    console.log(this.state.address);
    const {dispatch} = this.props;
    const address = this.state.address;
    await dispatch(updateUserAddress(address.id, address));
    const {update} = this.props.profile;
    console.log(update);
    console.log(address.user_id);
    // console.log(this.props.dispatch);

    if (update.data) {
      dispatch(getUserAddress(address.user_id));
      this.props.navigation.pop();
      console.log('berhasil');
      // await dispatch(updateUserAddress(item.id, address));
      // const {update} = this.props.profile;
      // if (update.status === 200) {
      //   // this.props.navigation.pop();
      //   this.props.navigation.push('Shipping Address');
      // }
    }
  };

  setValue = () => {
    const {item} = this.props.route.params;
    this.setState({
      address: item,
    });
    console.log(item);
  };

  componentDidMount() {
    this.setValue();
  }

  render() {
    return (
      <>
        <MyHeader title={'Update Shipping Address'} />
        <ScrollView style={styles.container}>
          {/* <View style={authStyle.formSection}> */}
          {/* <Text style={authStyle.infoTextError}>{this.state.error}</Text> */}
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Save address as</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={'address name ...'}
              value={this.state.address.title}
              onChangeText={(e) => this.handleInput(e, 'title')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Recipient name</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={'person name ...'}
              value={this.state.address.recipient}
              onChangeText={(e) => this.handleInput(e, 'recipient')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Recipient number</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={'person number ...'}
              keyboardType="numeric"
              value={this.state.address.recipient_number}
              onChangeText={(e) => this.handleInput(e, 'recipient_number')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Full address</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={'full address ...'}
              value={this.state.address.address}
              onChangeText={(e) => this.handleInput(e, 'address')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>City</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={'city name ...'}
              value={this.state.address.city}
              onChangeText={(e) => this.handleInput(e, 'city')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>State/Province/Region</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={'your state/province ...'}
              value={this.state.address.province}
              onChangeText={(e) => this.handleInput(e, 'province')}
            />
          </View>
          <View style={authStyle.textInput}>
            {/* <Text style={authStyle.label}>Zip Code (Postal Code)</Text> */}
            <TextInput
              style={authStyle.inputForm}
              placeholder={'your zip code ...'}
              keyboardType="numeric"
              value={this.state.address.zip_code.toString()}
              onChangeText={(e) => this.handleInput(e, 'zip_code')}
            />
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Country</Text>
            <Picker
              selectedValue={this.state.address.country}
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

export default connect(mapsStateToProps)(UpdateShippingAddress);
