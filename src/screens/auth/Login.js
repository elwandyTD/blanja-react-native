import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import IconF from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {loginUser, getUser} from '../../public/redux/actionCreators/auth';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class Login extends Component {
  state = {
    error: '',
    type: 'Customer',
    user: {
      user_email: '',
      user_password: '',
    },
    seller: {
      user_email: '',
      user_password: '',
    },
  };

  updateType = (type) => {
    this.setState({type});
  };

  handleInput = (value, name) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSeller = (value, name) => {
    this.setState({
      seller: {
        ...this.state.seller,
        [name]: value,
      },
    });
  };

  onSubmit = async () => {
    const {user_email, user_password} = this.state.user;
    const empty = [user_email.trim(), user_password.trim()];

    if (empty.includes('')) {
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      this.setState({
        error: 'Please fill the form',
      });
    } else if (!user_email.includes('@')) {
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      this.setState({
        error: 'Please input email',
      });
    } else {
      const {dispatch} = this.props;

      if (this.state.type === 'Customer') {
        await dispatch(loginUser(this.state.user, 'customer'));
      } else {
        await dispatch(loginUser(this.state.seller, 'seller'));
      }
      const {login} = this.props.auth;
      // console.log(login);
      if (login.err) {
        ToastAndroid.show('Login failed', ToastAndroid.SHORT);
        this.setState({
          error: login.err,
        });
      }

      if (login.data) {
        dispatch(getUser(login.data.level + 's', login.data.user_id));
        ToastAndroid.show('Login success', ToastAndroid.SHORT);
        try {
          await AsyncStorage.setItem('@user', JSON.stringify(login.data));

          this.props.navigation.push('Home');
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  render() {
    return (
      <>
        <MyHeader to="Home" title=" " />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Login</Text>
          {/* <Text style={styles.infoText}>
              We have sent an email containing a password reset instruction to
              your email. please check your email.
            </Text> */}
          <View style={styles.btnTypeSec}>
            <TouchableOpacity
              onPress={() => this.updateType('Customer')}
              style={
                this.state.type === 'Customer'
                  ? styles.btnType
                  : styles.btnTypeOff
              }>
              <Text
                style={
                  this.state.type === 'Customer'
                    ? styles.btnAuthText
                    : styles.btnAuthTextOff
                }>
                Customer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.updateType('Seller')}
              style={
                this.state.type === 'Seller'
                  ? styles.btnType
                  : styles.btnTypeOff
              }>
              <Text
                style={
                  this.state.type === 'Seller'
                    ? styles.btnAuthText
                    : styles.btnAuthTextOff
                }>
                Seller
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.type === 'Customer' ? (
            <View style={styles.formSection}>
              <Text style={styles.infoTextError}>{this.state.error}</Text>
              <View style={styles.textInput}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="your email ..."
                  value={this.state.user.user_email}
                  onChangeText={(e) => this.handleInput(e, 'user_email')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.inputForm}
                  placeholder="your password ..."
                  value={this.state.user.user_password}
                  onChangeText={(e) => this.handleInput(e, 'user_password')}
                />
              </View>
              <View style={styles.rightSection}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.push('Forgot Password')}>
                  <Text style={styles.rightSecText}>
                    Forgot your password?{' '}
                    <IconF name="arrow-right-l" color="#DB3022" />
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btnAuth} onPress={this.onSubmit}>
                <Text style={styles.btnAuthText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('Sign Up')}
                style={{marginTop: 10}}>
                <Text
                  style={{...styles.rightSecText, ...{textAlign: 'center'}}}>
                  Create new account ?
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.formSection}>
              <Text style={styles.infoTextError}>{this.state.error}</Text>
              <View style={styles.textInput}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="your email ..."
                  value={this.state.seller.user_email}
                  onChangeText={(e) => this.handleSeller(e, 'user_email')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.inputForm}
                  placeholder="your password ..."
                  value={this.state.seller.user_password}
                  onChangeText={(e) => this.handleSeller(e, 'user_password')}
                />
              </View>
              <View style={styles.rightSection}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.push('Forgot Password')}>
                  <Text style={styles.rightSecText}>
                    Forgot your password?{' '}
                    <IconF name="arrow-right-l" color="#DB3022" />
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btnAuth} onPress={this.onSubmit}>
                <Text style={styles.btnAuthText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('Sign Up')}
                style={{marginTop: 10}}>
                <Text
                  style={{...styles.rightSecText, ...{textAlign: 'center'}}}>
                  Create new account ?
                </Text>
              </TouchableOpacity>
            </View>
          )}
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

export default connect(mapsStateToProps)(Login);
