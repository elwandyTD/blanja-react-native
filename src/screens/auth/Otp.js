import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {otpUser} from '../../public/redux/actionCreators/auth';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class Otp extends Component {
  state = {
    error: '',
    user: {
      otp: '',
    },
  };

  handleInput = (value, name) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  onSubmit = async () => {
    if (this.state.user.otp.trim() === '') {
      ToastAndroid.show('Otp failed', ToastAndroid.SHORT);
      this.setState({
        error: 'Please input your otp',
      });
    } else {
      const {dispatch, navigation} = this.props;

      await dispatch(otpUser(this.state.user));
      const {otp} = this.props.auth;

      if (otp.error) {
        this.setState({
          error: otp.error,
        });
        ToastAndroid.show('Otp failed', ToastAndroid.SHORT);
      }

      if (otp.message) {
        ToastAndroid.show('Otp success', ToastAndroid.SHORT);
        navigation.replace('Reset Password', {
          email: this.props.route.params.email,
        });
      }
    }
  };

  render() {
    return (
      <>
        <MyHeader title=" " />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>OTP</Text>
          <View style={styles.formSection}>
            <Text style={styles.infoText}>
              Please, enter your otp from your email address
            </Text>
            <Text style={styles.infoTextError}>{this.state.error}</Text>
            <View style={styles.textInput}>
              <Text style={styles.label}>Otp</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="your otp ..."
                onChangeText={(e) => this.handleInput(e, 'otp')}
              />
            </View>
            <TouchableOpacity style={styles.btnAuth} onPress={this.onSubmit}>
              <Text style={styles.btnAuthText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapsStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapsStateToProps)(Otp);
