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
    show: false,
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
      const jsonValue = await AsyncStorage.getItem('@user');
      if (jsonValue !== null) {
        this.setState({user: JSON.parse(jsonValue)});
        console.log(this.state.user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  goLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      if (jsonValue == null) {
        this.props.navigation.replace('Sign In');
      } else {
        this.setState({
          show: true,
        });
      }
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

          this.setUserState();
        } catch (e) {
          console.log(e);
        }
      }

      this.setUserState();
      this.goLogin();
    } else {
      console.log(this.state.user);
    }
  };

  componentDidMount() {
    this.goLogin();
    this.setUserState();
  }

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <Header title=" " showPop={false} component={this.iconRight} />
            <ScrollView style={styles.container}>
              <Text style={styles.title}>My profile</Text>
              <View style={styles.rowInfo}>
                <Image source={ProfileImg} style={styles.imageUser} />
                <View style={styles.rowUser}>
                  <Text style={styles.username}>
                    {this.state.user ? this.state.user.user_name : 'Matilda'}
                  </Text>
                  <Text style={styles.email}>
                    {this.state.user
                      ? this.state.user.user_email
                      : 'matildabrown@mail.com'}
                  </Text>
                </View>
              </View>
              <View style={styles.linkContainer}>
                {this.state.user.level && this.state.user.level === 'seller' ? (
                  <>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.push('Seller Products')
                      }>
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
                    <TouchableOpacity
                      onPress={
                        () => console.log('transaction')
                        // this.props.navigation.push('Transaction', {
                        //   user: this.state.user,
                        // })
                      }>
                      <View style={styles.linkItem}>
                        <View style={styles.rowLink}>
                          <Text style={styles.linkTitle}>All Transaction</Text>
                          <Text style={styles.linkSub}>
                            Notifications, password
                          </Text>
                        </View>
                        <Text>{'>'}</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.linkItem}>
                        <View style={styles.rowLink}>
                          <Text style={styles.linkTitle}>Settings</Text>
                          <Text style={styles.linkSub}>
                            Notifications, password
                          </Text>
                        </View>
                        <Text>{'>'}</Text>
                      </View>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('My Orders')
                      }>
                      <View style={styles.linkItem}>
                        <View style={styles.rowLink}>
                          <Text style={styles.linkTitle}>My orders</Text>
                          <Text style={styles.linkSub}>
                            Already have 12 orders
                          </Text>
                        </View>
                        <Text>{'>'}</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.push('Shipping Address')
                      }>
                      <View style={styles.linkItem}>
                        <View style={styles.rowLink}>
                          <Text style={styles.linkTitle}>
                            Shipping addresses
                          </Text>
                          <Text style={styles.linkSub}>3 addresses</Text>
                        </View>
                        <Text>{'>'}</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.linkItem}>
                        <View style={styles.rowLink}>
                          <Text style={styles.linkTitle}>Settings</Text>
                          <Text style={styles.linkSub}>
                            Notifications, password
                          </Text>
                        </View>
                        <Text>{'>'}</Text>
                      </View>
                    </TouchableOpacity>
                  </>
                )}
                {!this.state.user && (
                  <Button
                    title="Sign In"
                    onPress={() => this.props.navigation.navigate('Sign In')}
                  />
                )}
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.push('Chat', {user: this.state.user})
                  }>
                  <View style={styles.linkItem}>
                    <View style={styles.rowLink}>
                      <Text style={styles.linkTitle}>Chat</Text>
                      <Text style={styles.linkSub}>Already have 12 orders</Text>
                    </View>
                    <Text>{'>'}</Text>
                  </View>
                </TouchableOpacity>
                <Button title="Logout" onPress={this.logoutUser} />
              </View>
            </ScrollView>
          </>
        )}
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
