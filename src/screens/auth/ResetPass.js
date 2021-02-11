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
import {resetPassword} from '../../public/redux/actionCreators/auth';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class ResetPass extends Component {
  state = {
    onTyping: false,
    error: '',
    user: {
      pass1: '',
      pass2: '',
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
    if (this.state.user.pass1 === '' || this.state.user.pass2 === '') {
      ToastAndroid.show('Reset password failed', ToastAndroid.SHORT);
      this.setState({
        error: 'Please fill the form',
      });
    } else if (this.state.user.pass1 !== this.state.user.pass2) {
      ToastAndroid.show('Reset password failed', ToastAndroid.SHORT);
      this.setState({
        error: "Password doesn't match",
      });
    } else {
      const {dispatch, navigation} = this.props;
      const body = {
        role: 'customers',
        user_email: this.props.route.params.email,
        user_password: this.state.user.pass1,
      };

      await dispatch(resetPassword(body));
      const {reset} = this.props.auth;

      if (reset.error) {
        ToastAndroid.show('Reset password failed', ToastAndroid.SHORT);
        this.setState({
          error: reset.error,
        });
      }

      if (reset.message) {
        ToastAndroid.show('Reset password success', ToastAndroid.SHORT);
        navigation.navigate('Sign In');
      }
    }
  };

  render() {
    return (
      <>
        <MyHeader title=" " />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Reset Password</Text>
          <View style={styles.formSection}>
            <Text style={styles.infoTextError}>
              You need to change your password to activate your account
            </Text>
            <Text style={styles.infoTextError}>{this.state.error}</Text>
            <View style={styles.textInput}>
              <Text style={styles.label}>New Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputForm}
                placeholder="your password ..."
                value={this.state.user.pass1}
                onChangeText={(e) => this.handleInput(e, 'pass1')}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.label}>Confirmation New Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputForm}
                placeholder="your password ..."
                value={this.state.user.pass2}
                onChangeText={(e) => this.handleInput(e, 'pass2')}
              />
            </View>
            <TouchableOpacity onPress={this.onSubmit} style={styles.btnAuth}>
              <Text style={styles.btnAuthText}>RESET PASSWORD</Text>
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

export default connect(mapsStateToProps)(ResetPass);
