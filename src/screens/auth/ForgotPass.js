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
import {forgotPassword} from '../../public/redux/actionCreators/auth';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class ForgotPass extends Component {
  state = {
    error: '',
    user: {
      user_email: '',
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
    if (this.state.user.user_email.trim() === '') {
      ToastAndroid.show('Forgot password failed', ToastAndroid.SHORT);
      this.setState({
        error: 'Please input your email',
      });
    } else {
      const {dispatch, navigation} = this.props;

      await dispatch(forgotPassword(this.state.user));
      const {forgot} = this.props.auth;

      if (forgot.error) {
        ToastAndroid.show('Forgot password failed', ToastAndroid.SHORT);
        this.setState({
          error: forgot.error,
        });
      }

      if (forgot.data) {
        ToastAndroid.show('Forgot password success', ToastAndroid.SHORT);
        navigation.replace('OTP', {
          email: this.state.user.user_email,
        });
      }
    }
  };

  render() {
    return (
      <>
        <MyHeader title=" " />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Forgot Password</Text>
          <View style={styles.formSection}>
            <Text style={styles.infoText}>
              Please, enter your email address. You will receive a link to
              create a new password via email.
            </Text>
            <Text style={styles.infoTextError}>{this.state.error}</Text>
            <View style={styles.textInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="your email ..."
                onChangeText={(e) => this.handleInput(e, 'user_email')}
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

export default connect(mapsStateToProps)(ForgotPass);
