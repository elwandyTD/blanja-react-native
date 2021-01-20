import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import IconF from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

import {logoutUser} from '../public/redux/actionCreators/auth';
import ProfileImg from '../assets/images/profile.png';
import categoriesStyles from '../styles/categoriesStyles';
import styles from '../styles/profileStyle';

import Header from '../components/Header';

class Profile extends Component {
  state = {
    user: {},
  };

  iconRight = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Search')}
        style={categoriesStyles.btnArrow}>
        <IconF
          name="search"
          size={18}
          style={categoriesStyles.iconRight}
          color="#222222"
        />
      </TouchableOpacity>
    );
  };

  setUserState = async () => {
    try {
      if (!this.state.user.user_email) {
        console.log(this.props.navigation);
        // this.props.navigation.replace('Login');
        // console.log('tidak ada');
      }

      const jsonValue = await AsyncStorage.getItem('@user');
      return jsonValue != null
        ? this.setState({user: JSON.parse(jsonValue)})
        : this.setState({user: ''});
    } catch (e) {
      console.log(e);
    }
  };

  logoutUser = async () => {
    const {dispatch} = this.props;

    if (this.state.user.user_email) {
      await dispatch(logoutUser(this.state.user.token));
      const {logout} = this.props.auth;

      if (logout.isLogout) {
        try {
          await AsyncStorage.removeItem('@user');
        } catch (e) {
          console.log(e);
        }
      }

      this.setUserState();
    } else {
      console.log(this.state.user);
    }
  };

  componentDidMount() {
    this.setUserState();
  }

  render() {
    console.log(this.state.user);
    return (
      <>
        <Header title=" " showPop={false} component={this.iconRight} />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>My profile</Text>
          <View style={styles.rowInfo}>
            <Image source={ProfileImg} style={styles.imageUser} />
            <View style={styles.rowUser}>
              <Text style={styles.username}>Matilda</Text>
              <Text style={styles.email}>matildabrown@mail.com</Text>
            </View>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('My Orders')}>
              <View style={styles.linkItem}>
                <View style={styles.rowLink}>
                  <Text style={styles.linkTitle}>My orders</Text>
                  <Text style={styles.linkSub}>Already have 12 orders</Text>
                </View>
                <Text>{'>'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Shipping Address')
              }>
              <View style={styles.linkItem}>
                <View style={styles.rowLink}>
                  <Text style={styles.linkTitle}>Shipping addresses</Text>
                  <Text style={styles.linkSub}>3 addresses</Text>
                </View>
                <Text>{'>'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.linkItem}>
                <View style={styles.rowLink}>
                  <Text style={styles.linkTitle}>Settings</Text>
                  <Text style={styles.linkSub}>Notifications, password</Text>
                </View>
                <Text>{'>'}</Text>
              </View>
            </TouchableOpacity>
            {this.state.user.level && this.state.user.level === 'seller' ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.push('Seller Products')}>
                <View style={styles.linkItem}>
                  <View style={styles.rowLink}>
                    <Text style={styles.linkTitle}>My Products</Text>
                    <Text style={styles.linkSub}>
                      Add, edit or delete my products
                    </Text>
                  </View>
                  <Text>{'>'}</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <View style={styles.linkItem}>
                  <View style={styles.rowLink}>
                    <Text style={styles.linkTitle}>Customer</Text>
                    <Text style={styles.linkSub}>For Customer</Text>
                  </View>
                  <Text>{'>'}</Text>
                </View>
              </TouchableOpacity>
            )}
            <Button
              title="Sign In"
              onPress={() => this.props.navigation.navigate('Sign In')}
            />
            <Button
              title="Sign Up"
              onPress={() => this.props.navigation.push('Sign Up')}
            />
            <Button
              title="Forgot Password"
              onPress={() => this.props.navigation.push('Forgot Password')}
            />
            <Button
              title="Reset Password"
              onPress={() => this.props.navigation.push('Reset Password')}
            />
            <Button title="Logout" onPress={this.logoutUser} />
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

export default connect(mapsStateToProps)(Profile);
