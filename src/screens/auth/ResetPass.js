import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class ResetPass extends Component {
  state = {
    onTyping: false,
    user: {
      email: '',
      password: '',
    },
  };

  // handleInput = (e) => {
  //   const value = e.target.value;
  //   this.setState({
  //     auth: {
  //       ...this.state.auth,
  //       // [e.target]
  //     },
  //   });
  // };

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
            <View style={styles.textInput}>
              <Text style={styles.label}>New Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputForm}
                placeholder="your password ..."
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.label}>Confirmation New Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputForm}
                placeholder="your password ..."
              />
            </View>
            <TouchableOpacity style={styles.btnAuth}>
              <Text style={styles.btnAuthText}>RESET PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default ResetPass;
