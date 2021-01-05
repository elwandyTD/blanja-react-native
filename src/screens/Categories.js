import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import IconF from 'react-native-vector-icons/Fontisto';

import styles from '../styles/categoriesStyles';
import authStyles from '../styles/authStyle';

import Header from '../components/Header';
class Cart extends Component {
  iconRight = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Search')}
        style={styles.btnArrow}>
        <IconF
          name="search"
          size={18}
          style={styles.iconRight}
          color="#222222"
        />
      </TouchableOpacity>
    );
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Header title="Categories" component={this.iconRight} />
        <ScrollView style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <View style={styles.infoContainer}>
            <TouchableOpacity
              style={{...authStyles.btnAuth, ...{marginTop: 0}}}>
              <Text style={authStyles.btnAuthText}>VIEW ALL ITEMS</Text>
            </TouchableOpacity>
            <Text style={styles.textInfo}>Choose Category</Text>
          </View>
          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Cart;
