import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconF from 'react-native-vector-icons/Fontisto';
import {connect} from 'react-redux';
import {registerUser} from '../../public/redux/actionCreators/auth';

import styles from '../../styles/authStyle';
import MyHeader from '../../components/Header';

export class Register extends Component {
  state = {
    type: 'Customer',
    error: '',
    user: {
      user_name: '',
      user_email: '',
      user_password: '',
    },
    seller: {
      user_name: '',
      user_email: '',
      user_phone: '',
      user_store: '',
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

  handleSeller = (value, name) => {
    this.setState({
      seller: {
        ...this.state.seller,
        [name]: value,
      },
    });
  };

  updateType = (type) => {
    this.setState({type});
  };

  onSubmit = async () => {
    // const {user_email, user_name, user_password} = this.state.user;
    // const empty = [user_email.trim(), user_name.trim(), user_password];
    const {dispatch} = this.props;

    if (this.state.type === 'Customer') {
      await dispatch(registerUser(this.state.user, 'customer'));
    } else {
      await dispatch(registerUser(this.state.seller, 'seller'));
    }
    const {register} = this.props.auth;

    if (register.error) {
      this.setState({
        error: register.error,
      });
    }

    if (register.status === 200) {
      this.props.navigation.replace('Sign In');
    }

    // if (empty.includes('')) {
    //   this.setState({
    //     error: 'Please fill the form',
    //   });
    // } else if (!user_email.includes('@')) {
    //   this.setState({
    //     error: 'Please input email',
    //   });
    // } else {
    //   this.setState({
    //     error: '',
    //   });
    //   const {dispatch} = this.props;
    //   await dispatch(registerUser(this.state.user));
    //   const {register} = this.props.auth;

    //   if (register.error) {
    //     this.setState({
    //       error: register.error,
    //     });
    //   }

    // if (register.status === 200) {
    //   this.props.navigation.replace('Sign In');
    // }
    // }
  };

  render() {
    return (
      <>
        <MyHeader title=" " />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Sign Up {this.state.type}</Text>
          <View style={styles.btnTypeSec}>
            <TouchableOpacity
              onPress={() => this.updateType('Customer')}
              style={styles.btnType}>
              <Text style={styles.btnAuthText}>Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.updateType('Seller')}
              style={styles.btnType}>
              <Text style={styles.btnAuthText}>Seller</Text>
            </TouchableOpacity>
          </View>
          {this.state.type === 'Customer' ? (
            <View style={styles.formSection}>
              <Text style={styles.infoTextError}>{this.state.error}</Text>
              <View style={styles.textInput}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="your name ..."
                  onChangeText={(e) => this.handleInput(e, 'user_name')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="your email ..."
                  onChangeText={(e) => this.handleInput(e, 'user_email')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.inputForm}
                  placeholder="your password ..."
                  onChangeText={(e) => this.handleInput(e, 'user_password')}
                />
              </View>
              <View style={styles.rightSection}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.replace('Sign In')}>
                  <Text style={styles.rightSecText}>
                    Already have an account?{' '}
                    <IconF name="arrow-right-l" color="#DB3022" />
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btnAuth} onPress={this.onSubmit}>
                <Text style={styles.btnAuthText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.formSection}>
              <Text style={styles.infoTextError}>{this.state.error}</Text>
              <View style={styles.textInput}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="your name ..."
                  onChangeText={(e) => this.handleSeller(e, 'user_name')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="your email ..."
                  onChangeText={(e) => this.handleSeller(e, 'user_email')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.inputForm}
                  keyboardType="numeric"
                  placeholder="your phone number ..."
                  onChangeText={(e) => this.handleSeller(e, 'user_phone')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Store Name</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="your store name ..."
                  onChangeText={(e) => this.handleSeller(e, 'user_store')}
                />
              </View>
              <View style={styles.textInput}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.inputForm}
                  placeholder="your password ..."
                  onChangeText={(e) => this.handleSeller(e, 'user_password')}
                />
              </View>
              <View style={styles.rightSection}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.replace('Sign In')}>
                  <Text style={styles.rightSecText}>
                    Already have an account?{' '}
                    <IconF name="arrow-right-l" color="#DB3022" />
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{...styles.btnAuth, ...{marginBottom: 30}}}
                onPress={this.onSubmit}>
                <Text style={styles.btnAuthText}>SIGN UP</Text>
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

export default connect(mapsStateToProps)(Register);
