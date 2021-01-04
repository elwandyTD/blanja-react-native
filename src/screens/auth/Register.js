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

export class Register extends Component {
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
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.formSection}>
            <View style={styles.textInput}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.inputForm} placeholder="your name ..." />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="your email ..."
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputForm}
                placeholder="your password ..."
              />
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.rightSecText}>
                Already have an account?{' '}
                <IconF name="arrow-right-l" color="#DB3022" />
              </Text>
            </View>
            <TouchableOpacity style={styles.btnAuth}>
              <Text style={styles.btnAuthText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Register;
