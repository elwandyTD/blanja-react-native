import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  // ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import IconIo from 'react-native-vector-icons/Ionicons';
import {AirbnbRating} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {API_HOST} from '@env';

import {getSingleProduct} from '../public/redux/actionCreators/product';
import productsHorizontalStyles from '../styles/productsHorizontalStyle';
import styles from '../styles/detailProductStyle';

import Header from '../components/Header';
import ProductsHorizontal from '../components/ProductsHorizontal';

export class DetailProduct extends Component {
  state = {
    size: '',
    color: '',
    qty: 0,
    product: {},
    items: [],
  };

  getItems = async () => {
    // await AsyncStorage.setItem('@bag', JSON.stringify([]));
    const items = await AsyncStorage.getItem('@bag');
    if (items !== null) {
      this.setState({
        items: JSON.parse(items),
      });
    }
    // console.log(this.state.items);
  };

  getDetailProduct = async () => {
    const {id} = this.props.route.params;
    const {dispatch} = this.props;

    await dispatch(getSingleProduct(Number(id)));

    const {singleProduct} = this.props.product;
    const product = singleProduct.data[0];

    if (singleProduct.data) {
      this.setState({
        product,
        size: product.product_sizes[0].size_code,
        color: product.product_colors[0].color_name,
      });
    }
  };

  addToBag = async () => {
    const isInBag = this.state.items.findIndex(
      (item) =>
        item.product_id === this.state.product.product_id &&
        item.color === this.state.color &&
        item.size === this.state.size,
    );

    if (isInBag >= 0) {
      const items = this.state.items;
      items[isInBag].qty += 1;

      await AsyncStorage.setItem('@bag', JSON.stringify(items));
    } else {
      const body = {
        product_id: this.state.product.product_id,
        product_title: this.state.product.product_title,
        product_price: this.state.product.product_price,
        brand_name: this.state.product.brand_name,
        product_rating: this.state.product.product_rating,
        review_user: this.state.product.review_user,
        color: this.state.color,
        size: this.state.size,
        qty: this.state.qty + 1,
        img: this.state.product.product_images[0].image_path,
        checked: false,
      };

      await AsyncStorage.setItem(
        '@bag',
        JSON.stringify([...this.state.items, body]),
      );
    }

    this.getItems();
    console.log(this.state.items);
  };

  componentDidMount() {
    this.getItems();
    this.getDetailProduct();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.route.params.id !== this.props.route.params.id) {
      this.getDetailProduct();
    }
  }

  render() {
    const {products} = this.props.product.productNew.data;
    const {isPending} = this.props.product;

    return (
      <>
        <Header
          title={!isPending ? this.state.product.category_name : 'Loading'}
        />
        <ScrollView style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <ScrollView horizontal={true} style={styles.containerHorizontal}>
            {!isPending &&
              this.state.product.product_images &&
              this.state.product.product_images.map((image, i) => {
                return (
                  <Image
                    key={i}
                    source={{
                      uri: API_HOST + image.image_path,
                    }}
                    style={styles.img}
                  />
                );
              })}
          </ScrollView>
          <View style={styles.containerThree}>
            <Picker
              selectedValue={this.state.size}
              style={styles.secOpt}
              onValueChange={(itemValue, _) =>
                this.setState({size: itemValue})
              }>
              {!isPending &&
                this.state.product.product_sizes &&
                this.state.product.product_sizes.map((size, i) => {
                  return (
                    <Picker.Item
                      key={i}
                      label={size.size_code.toUpperCase()}
                      value={size.size_code}
                    />
                  );
                })}
            </Picker>
            <Picker
              selectedValue={this.state.color}
              style={styles.secOpt}
              onValueChange={(itemValue, _) =>
                this.setState({color: itemValue})
              }>
              {!isPending &&
                this.state.product.product_colors &&
                this.state.product.product_colors.map((color, i) => {
                  return (
                    <Picker.Item
                      key={i}
                      label={color.color_name}
                      value={color.color_name}
                    />
                  );
                })}
            </Picker>
            <View style={styles.center}>
              <IconIo name="heart" color="#DB3022" size={20} />
            </View>
          </View>
          <View style={styles.containerOne}>
            <View style={styles.infoSect}>
              <Text style={{...styles.itemTitle, ...{fontWeight: 'bold'}}}>
                {!isPending ? this.state.product.product_title : 'Loading'}
              </Text>
              <Text style={styles.itemTitle}>
                ${!isPending ? this.state.product.product_price : 0}
              </Text>
            </View>
            <Text style={productsHorizontalStyles.subtitle}>
              {!isPending && this.state.product.brand_name}
            </Text>
            <View style={productsHorizontalStyles.starsReview}>
              <AirbnbRating
                isDisabled={true}
                showRating={false}
                size={15}
                starStyle={productsHorizontalStyles.starStyle}
                defaultRating={
                  !isPending ? Math.floor(this.state.product.product_rating) : 0
                }
              />
              <Text style={productsHorizontalStyles.reviewNum}>
                ({!isPending && this.state.product.review_user})
              </Text>
            </View>
            <Text style={styles.itemDesc}>
              {!isPending && this.state.product.product_description}
            </Text>
          </View>
          <View style={styles.listSect}>
            <TouchableOpacity>
              <View style={styles.listInfo}>
                <Text>Shipping Info</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listInfo}>
                <Text>Support</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOne}>
            <View style={styles.rowOne}>
              <Text style={styles.textNext}>You can also like this</Text>
              <Text style={productsHorizontalStyles.subtitle}>
                {products.length} items
              </Text>
            </View>
          </View>
          <ProductsHorizontal products={products} justList={true} />
        </ScrollView>
        <View style={styles.containerTwo}>
          <TouchableOpacity onPress={this.addToBag} style={styles.btnAuth}>
            <Text style={styles.btnAuthText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const mapsStateToProps = ({product}) => {
  return {
    product,
  };
};

export default connect(mapsStateToProps)(DetailProduct);
