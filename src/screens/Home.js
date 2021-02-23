import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {connect} from 'react-redux';
import IconF from 'react-native-vector-icons/Feather';
import {API_HOST} from '@env';
// import Config from 'react-native-config';
// import axios from 'axios';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  // Dimensions,
  StatusBar,
} from 'react-native';
import {
  getProductNews,
  getProductPopulars,
} from '../public/redux/actionCreators/product';
import {getCategories} from '../public/redux/actionCreators/attribute';

import ProductsHorizontal from '../components/ProductsHorizontal';
import {updateTest} from '../public/redux/actionCreators/device';
import Banner from '../assets/images/banner.jpg';
import styles from '../styles/homeStyle';
// import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  state = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    orientation: 'portrait',
    productNew: {},
    productPopular: {},
  };

  getProductNewDispatch = async () => {
    const {dispatch} = this.props;
    await dispatch(getProductNews());
    const {product} = this.props;
    this.setState({
      productNew: product.productNew.data,
    });
    // if (this.props.product.productNew.data) {
    //   this.setState({
    //     productNew: this.props.product.productNew.data,
    //   });
    // } else {
    //   await dispatch(getProductNews());
    //   const {product} = this.props;
    //   this.setState({
    //     productNew: product.productNew.data,
    //   });
    // }
  };

  getProductPopularDispacth = async () => {
    const {dispatch} = this.props;
    await dispatch(getProductPopulars());
    const {product} = this.props;
    this.setState({
      productPopular: product.productPopular.data,
    });
  };

  getCategoriesDispatch = async () => {
    const {dispatch} = this.props;

    await dispatch(getCategories());
  };

  dispatchUpdateDevice = async (window) => {
    const {dispatch} = this.props;

    await dispatch(updateTest(window));
    console.log(this.props.device);
  };

  componentDidMount() {
    this.getProductNewDispatch();
    this.getProductPopularDispacth();
    this.getCategoriesDispatch();

    // console.log(API_HOST);
    // this.isProduct();

    // const newSocketConnection = io('http://localhost:8080', {
    //   query: {id},
    // });
  }

  render() {
    const {product} = this.props;

    console.log(product && product.productNew);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ScrollView>
          <View style={styles.banner}>
            <ImageBackground
              source={Banner}
              style={{
                ...styles.bannerImage,
                ...{
                  height:
                    this.state.orientation === 'portrait'
                      ? this.state.height / 2.5
                      : this.state.height - 25,
                },
              }}>
              <Text
                style={{
                  ...styles.textTitle,
                  ...{fontSize: this.state.width / 10},
                }}>
                Street Clothes
              </Text>
              <TouchableOpacity
                style={styles.notifButton}
                onPress={() => this.props.navigation.push('Notification')}>
                <IconF name="bell" color="white" style={styles.notifIcon} />
                <View style={styles.notifOn} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <ProductsHorizontal
            title="New"
            subtitle="You've never seen it before!"
            products={
              product &&
              product.productNew.data &&
              product.productNew.data.products
            }
            link="?order=newest&sort=desc"
          />

          <ProductsHorizontal
            title="Popular"
            subtitle="You've never seen it before!"
            products={
              product &&
              product.productPopular.data &&
              product.productPopular.data.products
            }
            link="?order=popular"
            tag="Popular"
            // to="Home"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapsStateToProps = ({device, product, attribute, auth}) => {
  return {
    device,
    product,
    attribute,
    auth,
  };
};

export default connect(mapsStateToProps)(Home);
