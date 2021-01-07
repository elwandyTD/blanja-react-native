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

import ProfileImg from '../assets/images/profile.png';
import categoriesStyles from '../styles/categoriesStyles';
import styles from '../styles/profileStyle';

import Header from '../components/Header';

class Profile extends Component {
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

  render() {
    return (
      <>
        <Header title=" " showPop={false} component={this.iconRight} />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>My profile</Text>
          <View style={styles.rowInfo}>
            <Image source={ProfileImg} style={styles.imageUser} />
            <View style={styles.rowUser}>
              <Text style={styles.username}>Matilda Brown</Text>
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
              onPress={() => this.props.navigation.push('Reset Passord')}
            />
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.push('Reset Passord')}>
              <Text>Hahah</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </>
    );
  }
}

// const Profile = () => {
//   return (
//     <View>
//       <Text>Profile</Text>
//     </View>
//   );
// };

export default Profile;
