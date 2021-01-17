import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconF from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {loginUser} from '../../public/redux/actionCreators/auth';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class Login extends Component {
  state = {
    error: '',
    onTyping: false,
    user: {
      user_email: '',
      user_password: '',
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
    const {user_email, user_password} = this.state.user;
    const empty = [user_email.trim(), user_password.trim()];

    if (empty.includes('')) {
      this.setState({
        error: 'Please fill the form',
      });
    } else if (!user_email.includes('@')) {
      this.setState({
        error: 'Please input email',
      });
    } else {
      this.setState({
        error: '',
      });
      const {dispatch} = this.props;
      await dispatch(loginUser(this.state.user));
      const {login} = this.props.auth;

      if (login.err) {
        this.setState({
          error: login.err,
        });
      }

      if (login.data) {
        try {
          await AsyncStorage.setItem('@user', JSON.stringify(login.data));

          this.props.navigation.replace('Home');
        } catch (e) {
          console.log(e);
        }
        // try {
        //   const value = await AsyncStorage.getItem('@user');
        //   if (value !== null) {
        //     const parse = JSON.parse(value);
        //     console.log(parse);
        //   }
        // } catch (e) {
        //   console.log(e);
        // }
        // this.props.navigation.replace('Home');
      }
    }
  };

  componentDidMount() {}

  render() {
    // console.log(this.props.auth);
    return (
      <>
        <MyHeader title=" " />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.formSection}>
            <Text style={styles.infoText}>
              We have sent an email containing a password reset instruction to
              your email. please check your email.
            </Text>
            <Text style={styles.infoTextError}>{this.state.error}</Text>
            <View style={styles.textInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="your email ..."
                value={this.state.user.email}
                onChangeText={(e) => this.handleInput(e, 'user_email')}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputForm}
                placeholder="your password ..."
                value={this.state.user.password}
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
              <Text style={{...styles.rightSecText, ...{textAlign: 'center'}}}>
                Create new account ?
              </Text>
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

export default connect(mapsStateToProps)(Login);
