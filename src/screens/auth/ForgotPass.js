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

export class ForgotPass extends Component {
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
          <Text style={styles.title}>Forgot Password</Text>
          <View style={styles.formSection}>
            <Text style={styles.infoText}>
              Please, enter your email address. You will receive a link to
              create a new password via email.
            </Text>
            <View style={styles.textInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="your email ..."
              />
            </View>
            <TouchableOpacity style={styles.btnAuth}>
              <Text style={styles.btnAuthText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default ForgotPass;
