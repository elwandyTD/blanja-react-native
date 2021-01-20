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
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

import categoriesStyles from '../styles/categoriesStyles';
import catalogStyle from '../styles/catalogStyle';
import styles from '../styles/bagStyle';

import ProductImage from '../assets/images/product-1.png';
import Header from '../components/Header';

// import authStyles from '../styles/authStyle';

export class Bag extends Component {
  state = {
    items: [],
    checkedItems: [],
    totalPrice: 0,
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

  getItems = async () => {
    // await AsyncStorage.setItem('@bag', JSON.stringify([]));
    const items = await AsyncStorage.getItem('@bag');

    if (items !== null) {
      const parse = JSON.parse(items);
      let price = 0;
      parse.map((item) => {
        price = price + Number(item.product_price) * item.qty;
      });

      this.setState({
        items: parse,
        totalPrice: price,
      });
    }
  };

  counterPrice = async (qty, i, type) => {
    let newQty = qty;
    if (type === 'plus') {
      newQty++;
    } else {
      if (newQty !== 1) {
        newQty--;
      }
    }

    const items = this.state.items;

    items[i].qty = newQty;

    await AsyncStorage.setItem('@bag', JSON.stringify(items));
    this.getItems();
  };

  checkoutItem = async () => {
    const checkout = {
      subtotal: this.state.totalPrice,
      items: this.state.items,
    };
    this.props.navigation.navigate('Checkout', {
      checkout,
    });
  };

  updateChecked = async (value, i) => {
    const items = this.state.items;

    if (value === true) {
      this.setState({
        checkedItems: [...this.state.checkedItems, i],
      });
    } else {
      this.setState({
        checkedItems: this.state.checkedItems.filter(),
      });
    }

    items[i].checked = value;

    await AsyncStorage.setItem('@bag', JSON.stringify(items));
    this.getItems();
  };

  componentDidMount() {
    this.getItems();
  }

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
            {/* {this.cardItem()} */}
            {this.state.items &&
              this.state.items.map((item, i) => {
                // console.log(i);
                return (
                  <TouchableOpacity key={i} onPress={() => console.log('Tet')}>
                    <View
                      style={{
                        ...catalogStyle.cardItem,
                        // ...{overflow: 'hidden'},
                      }}>
                      <View style={styles.checkContainer}>
                        <CheckBox
                          disabled={false}
                          value={item.checked}
                          onValueChange={(newValue) =>
                            this.updateChecked(newValue, i)
                          }
                        />
                      </View>
                      <View
                        style={{
                          ...styles.checkContainer,
                          ...{maxWidth: 110},
                        }}>
                        <Image
                          // source={ProductImage}
                          source={{
                            uri: 'http://192.168.43.216:8000' + item.img,
                          }}
                          style={catalogStyle.cardImage}
                        />
                      </View>
                      <View style={catalogStyle.cardInfo}>
                        <Text
                          style={{
                            ...catalogStyle.cardTitle,
                            ...{maxWidth: 100, overflow: 'hidden'},
                          }}>
                          {item.product_title}
                        </Text>
                        <View style={styles.infosItem}>
                          <Text style={catalogStyle.cardBrand}>Color: </Text>
                          <Text
                            style={{
                              ...catalogStyle.cardBrand,
                              ...{marginRight: 10},
                            }}>
                            {item.color}
                          </Text>
                          <Text style={catalogStyle.cardBrand}>Size: </Text>
                          <Text style={catalogStyle.cardBrand}>
                            {item.size}
                          </Text>
                        </View>
                        <View style={styles.changeInfoSect}>
                          <View style={styles.infosItem}>
                            <TouchableOpacity
                              onPress={() =>
                                this.counterPrice(item.qty, i, 'min')
                              }
                              style={styles.btnNum}>
                              <Text style={styles.textBtnNum}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.textNumInfo}>{item.qty}</Text>
                            <TouchableOpacity
                              onPress={() =>
                                this.counterPrice(item.qty, i, 'plus')
                              }
                              style={styles.btnNum}>
                              <Text style={styles.textBtnNum}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <Text style={catalogStyle.textNumInfo}>
                            {item.qty * item.product_price}$
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View style={{...styles.changeInfoSect, ...{marginBottom: 20}}}>
            <Text style={styles.textTotalPrice}>Total amount: </Text>
            <Text style={styles.numTotalPrice}>{this.state.totalPrice}$</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnAuth1}
              onPress={this.checkoutItem}>
              <Text style={styles.btnAuthText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Bag;
