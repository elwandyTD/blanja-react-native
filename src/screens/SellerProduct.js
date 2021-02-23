import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {AirbnbRating} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_HOST} from '@env';

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
    const {
      dispatch,
      auth: {user},
    } = this.props;

    if (!user) {
      await dispatch(getSellerProducts(user.data.user_id));
      const {seller} = this.props.product;

      // console.log(parse);
      // console.log(dispatch);
      if (seller.data) {
        this.setState({
          products: seller.data.products,
          user: user.data,
        });
      }
    }
  };

  componentDidMount() {
    this.getProductDispatch();
  }

  render() {
    const {product} = this.props;

    return (
      <>
        <MyHeader title="My Products" to="Profile" color="#FFF" />
        <ScrollView>
          <View style={catalogStyle.containerTop}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                this.props.navigation.push('Add Product', {
                  user: this.state.user,
                })
              }>
              <Text style={styles.font}>Add New Product</Text>
            </TouchableOpacity>
          </View>
          <View style={catalogStyle.itemsContainer}>
            {product && product.seller && product.seller.data.products.length
              ? product.seller.data.products.map((item, i) => {
                  return (
                    <View key={i} style={catalogStyle.cardItem}>
                      <Image
                        source={{
                          uri: API_HOST + item.product_images[0].image_path,
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
                })
              : console.log()}
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = ({product, auth}) => {
  return {
    product,
    auth,
  };
};

// export default SellerProduct;

export default connect(mapStateToProps)(SellerProduct);

const styles = StyleSheet.create({
  btn: {
    height: 30,
    width: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F01F0E',
  },
  font: {
    fontFamily: 'Metropolis-Regular',
    color: '#FFF',
    fontSize: 16,
  },
});
