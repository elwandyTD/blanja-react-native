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

import {getSingleProduct} from '../public/redux/actionCreators/product';
import productsHorizontalStyles from '../styles/productsHorizontalStyle';
// import authStyles from '../styles/authStyle';
import styles from '../styles/detailProductStyle';

import Header from '../components/Header';
import ProductsHorizontal from '../components/ProductsHorizontal';
// import Images from '../assets/images/product-1.png';
// import Images1 from '../assets/images/product-2.png';

export class DetailProduct extends Component {
  state = {
    language: 'java',
    size: '',
    color: '',
    qty: 0,
    product: {},
    items: {},
  };

  getItems = async () => {
    const items = await AsyncStorage.getItem('@cart');
    if (items !== null) {
      this.setState({
        items: JSON.parse(items),
      });
    }
  };

  getDetailProduct = async () => {
    const {id} = this.props.route.params;
    const {dispatch} = this.props;

    await dispatch(getSingleProduct(Number(id)));

    const {singleProduct} = this.props.product;

    if (singleProduct.data) {
      this.setState({
        product: singleProduct.data[0],
      });
    }
  };

  componentDidMount() {
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
                      uri: 'http://192.168.43.216:8000' + image.image_path,
                    }}
                    style={styles.img}
                  />
                );
              })}
          </ScrollView>
          <View style={styles.containerThree}>
            <Picker
              selectedValue={this.state.language}
              style={styles.secOpt}
              onValueChange={(itemValue, _) =>
                this.setState({language: itemValue})
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
              selectedValue={this.state.language}
              style={styles.secOpt}
              onValueChange={(itemValue, _) =>
                this.setState({language: itemValue})
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
          <TouchableOpacity style={styles.btnAuth}>
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
