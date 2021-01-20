import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import IconF from 'react-native-vector-icons/Fontisto';

import categoriesStyles from '../styles/categoriesStyles';
import catalogStyle from '../styles/catalogStyle';
import styles from '../styles/bagStyle';

import ProductImage from '../assets/images/product-1.png';
import Header from '../components/Header';

// import authStyles from '../styles/authStyle';

export class Bag extends Component {
  state = {
    items: [],
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

  getItems = async () => {};

  cardItem = () => {
    let qty = 1;

    return (
      <TouchableOpacity onPress={() => console.log('Tet')}>
        <View style={catalogStyle.cardItem}>
          <Image source={ProductImage} style={catalogStyle.cardImage} />
          <View style={catalogStyle.cardInfo}>
            <Text style={catalogStyle.cardTitle}>Pullover</Text>
            <View style={styles.infosItem}>
              <Text style={catalogStyle.cardBrand}>Mango: </Text>
              <Text style={catalogStyle.cardBrand}>Gray</Text>
              <Text style={catalogStyle.cardBrand}>Size: </Text>
              <Text style={catalogStyle.cardBrand}>Mango</Text>
            </View>
            <View style={styles.changeInfoSect}>
              <View style={styles.infosItem}>
                <TouchableOpacity
                  style={styles.btnNum}
                  onPress={() => {
                    if (qty !== 1) {
                      qty--;
                      console.log('kurang');
                    }
                  }}>
                  <Text style={styles.textBtnNum}>-</Text>
                </TouchableOpacity>
                <Text style={styles.textNumInfo}>{qty}</Text>
                <TouchableOpacity style={styles.btnNum} onPress={() => qty++}>
                  <Text style={styles.textBtnNum}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={catalogStyle.textNumInfo}>34$</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <>
        <Header showPop={false} component={this.iconRight} />
        <ScrollView style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Text style={styles.titleBag}>My Bag</Text>
          <View style={styles.itemsContainer}>
            {this.cardItem()}
            {/* <TouchableOpacity onPress={() => console.log('Tet')}>
              <View style={catalogStyle.cardItem}>
                <Image source={ProductImage} style={catalogStyle.cardImage} />
                <View style={catalogStyle.cardInfo}>
                  <Text style={catalogStyle.cardTitle}>Pullover</Text>
                  <View style={styles.infosItem}>
                    <Text style={catalogStyle.cardBrand}>Mango: </Text>
                    <Text style={catalogStyle.cardBrand}>Gray</Text>
                    <Text style={catalogStyle.cardBrand}>Size: </Text>
                    <Text style={catalogStyle.cardBrand}>Mango</Text>
                  </View>
                  <View style={styles.changeInfoSect}>
                    <View style={styles.infosItem}>
                      <TouchableOpacity style={styles.btnNum}>
                        <Text style={styles.textBtnNum}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.textNumInfo}>1</Text>
                      <TouchableOpacity style={styles.btnNum}>
                        <Text style={styles.textBtnNum}>+</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={catalogStyle.textNumInfo}>34$</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View style={{...styles.changeInfoSect, ...{marginBottom: 20}}}>
            <Text style={styles.textTotalPrice}>Total amount: </Text>
            <Text style={styles.numTotalPrice}>112$</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnAuth1}
              onPress={() => this.props.navigation.navigate('Checkout')}>
              <Text style={styles.btnAuthText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Bag;
