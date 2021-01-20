import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {AirbnbRating} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getSellerProducts} from '../public/redux/actionCreators/product';
import MyHeader from '../components/Header';
import catalogStyle from '../styles/catalogStyle';
import stylesProductHorizontal from '../styles/productsHorizontalStyle';

class SellerProduct extends Component {
  state = {
    products: [],
    user: {},
  };

  getProductDispatch = async () => {
    try {
      const user = await AsyncStorage.getItem('@user');
      if (user !== null) {
        const parse = JSON.parse(user);
        const {dispatch} = this.props;
        await dispatch(getSellerProducts(parse.user_id));
        const {seller} = this.props.product;

        // console.log(parse);
        console.log(dispatch);
        if (seller.data) {
          this.setState({
            products: seller.data.products,
            user: parse,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getProductDispatch();
  }

  render() {
    return (
      <>
        <MyHeader title="My Products" color="#FFF" />
        <ScrollView>
          <View style={catalogStyle.containerTop}>
            <Text>My Products</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.push('Add Product')}>
              <Text>Add New Product</Text>
            </TouchableOpacity>
          </View>
          <View style={catalogStyle.itemsContainer}>
            {this.state.products &&
              this.state.products.map((item, i) => {
                return (
                  <View key={i} style={catalogStyle.cardItem}>
                    <Image
                      source={{
                        uri:
                          'http://192.168.43.216:8000' +
                          item.product_images[0].image_path,
                      }}
                      style={catalogStyle.cardImage}
                    />
                    <View style={catalogStyle.cardInfo}>
                      <Text style={catalogStyle.cardTitle}>
                        {item.product_title}
                      </Text>
                      <Text style={catalogStyle.cardBrand}>
                        {item.brand_name}
                      </Text>
                      <View style={stylesProductHorizontal.starsReview}>
                        <AirbnbRating
                          isDisabled={true}
                          defaultRating={
                            item.product_rating !== null
                              ? Math.floor(item.product_rating)
                              : 0
                          }
                          showRating={false}
                          size={15}
                          starStyle={stylesProductHorizontal.starStyle}
                        />
                        <Text style={stylesProductHorizontal.reviewNum}>
                          ({item.review_user})
                        </Text>
                      </View>
                      <Text style={catalogStyle.cardPrice}>
                        {item.product_price}$
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = ({product}) => {
  return {
    product,
  };
};

// export default SellerProduct;

export default connect(mapStateToProps)(SellerProduct);
