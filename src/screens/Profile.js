import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
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
            <View style={styles.linkItem}>
              <View style={styles.rowLink}>
                <Text style={styles.linkTitle}>My orders</Text>
                <Text style={styles.linkSub}>Already have 12 orders</Text>
              </View>
              <Text>{'>'}</Text>
            </View>
            <View style={styles.linkItem}>
              <View style={styles.rowLink}>
                <Text style={styles.linkTitle}>Shipping addresses</Text>
                <Text style={styles.linkSub}>3 addresses</Text>
              </View>
              <Text>{'>'}</Text>
            </View>
            <View style={styles.linkItem}>
              <View style={styles.rowLink}>
                <Text style={styles.linkTitle}>Settings</Text>
                <Text style={styles.linkSub}>Notifications, password</Text>
              </View>
              <Text>{'>'}</Text>
            </View>
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
