import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconF from 'react-native-vector-icons/Fontisto';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class Login extends Component {
  state = {
    onTyping: false,
    user: {
      email: '',
      password: '',
    },
  };

  handleInput = (value, name) => {
    // console.log(value, 25);
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
    // console.log(e, name);
    // console.log(this.state.user, 32);
    // console.log(value);
  };

  onSubmit = () => {
    console.log(this.state.user);
  };

  render() {
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
            <View style={styles.textInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="your email ..."
                value={this.state.user.email}
                onChangeText={(e) => this.handleInput(e, 'email')}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputForm}
                placeholder="your password ..."
                value={this.state.user.password}
                onChangeText={(e) => this.handleInput(e, 'password')}
              />
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.rightSecText}>
                Forgot your password?{' '}
                <IconF name="arrow-right-l" color="#DB3022" />
              </Text>
            </View>
            <TouchableOpacity style={styles.btnAuth} onPress={this.onSubmit}>
              <Text style={styles.btnAuthText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Login;
