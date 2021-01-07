import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {AirbnbRating, BottomSheet, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import IconF from 'react-native-vector-icons/Fontisto';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {getProducts} from '../public/redux/actionCreators/product';

import stylesIcon from '../styles/categoriesStyles';
import stylesProductHorizontal from '../styles/productsHorizontalStyle';
import styles from '../styles/catalogStyle';
import FilterIcon from '../assets/icons/filter.png';
import MiscIcon from '../assets/icons/categories.png';
import ProductImage from '../assets/images/product-1.png';

import Header from '../components/Header';

class Catalog extends Component {
  state = {
    openModal: false,
    list: [
      {title: 'Popular'},
      {title: 'Newest'},
      {title: 'Customer Review'},
      {title: 'Price: lowest to high'},
      {title: 'Price: highest to low'},
      {
        title: 'Cancel',
        containerStyle: {backgroundColor: 'red'},
        titleStyle: {color: 'white'},
        onPress: () => this.setState({openModal: false}),
      },
    ],
  };

  iconRight = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Search')}
        style={stylesIcon.btnArrow}>
        <IconF
          name="search"
          size={18}
          style={stylesIcon.iconRight}
          color="#222222"
        />
      </TouchableOpacity>
    );
  };

  getProductsDispatch = async () => {
    const {dispatch} = this.props;
    const {params} = this.props.route;
    await dispatch(getProducts(params.link));
    console.log(params, 62);
  };

  componentDidMount() {
    this.getProductsDispatch();
  }

  componentDidUpdate(prevProps) {
    if (this.props.route.params.link !== prevProps.route.params.link) {
      this.getProductsDispatch();
    }
  }

  render() {
    const {params} = this.props.route;
    const {product} = this.props.product;

    return (
      <>
        <Header
          title=" "
          component={this.iconRight}
          color="#FFF"
          to={params.to ? params.to : 'Cart'}
        />
        <ScrollView>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <View style={styles.containerTop}>
            <Text style={styles.title}>
              {params.title ? params.title : 'Search All hehe'}
            </Text>
            <View style={styles.filterSection}>
              <View style={styles.rowInfo}>
                <Image source={FilterIcon} style={styles.filtersIcon} />
                <Text style={styles.textIcon}>Filters</Text>
              </View>
              <View style={{...styles.rowInfo, ...{marginLeft: -100}}}>
                <IconMI name="swap-vert" size={16} color="#222" />
                <TouchableOpacity
                  onPress={() => this.setState({openModal: true})}>
                  <Text style={styles.textIcon}>Price: lowest to high</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image source={MiscIcon} style={styles.filtersIcon} />
              </View>
            </View>
          </View>
          <View style={styles.itemsContainer}>
            {product.data &&
              product.data.products.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      this.props.navigation.push('Detail', {item: item})
                    }>
                    <View style={styles.cardItem}>
                      <Image
                        source={{
                          uri:
                            'http://192.168.43.216:8000' +
                            item.product_images[0].image_path,
                        }}
                        style={styles.cardImage}
                      />
                      <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>
                          {item.product_title}
                        </Text>
                        <Text style={styles.cardBrand}>{item.brand_name}</Text>
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
                        <Text style={styles.cardPrice}>
                          {item.product_price}$
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Detail', {id: 1})}>
              <View style={styles.cardItem}>
                <Image source={ProductImage} style={styles.cardImage} />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Pullover</Text>
                  <Text style={styles.cardBrand}>Mango</Text>
                  <View style={stylesProductHorizontal.starsReview}>
                    <AirbnbRating
                      isDisabled={true}
                      showRating={false}
                      size={15}
                      starStyle={stylesProductHorizontal.starStyle}
                    />
                    <Text style={stylesProductHorizontal.reviewNum}>(0)</Text>
                  </View>
                  <Text style={styles.cardPrice}>34$</Text>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>
          <BottomSheet
            isVisible={this.state.openModal}
            containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            <View style={styles.bottomSheet}>
              <Text style={styles.bottomSheetTitle}>Sort by</Text>
              {this.state.list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.bottomItem}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </BottomSheet>
        </ScrollView>
      </>
    );
  }
}

const mapsStateToProps = ({product}) => {
  return {
    product,
  };
};

export default connect(mapsStateToProps)(Catalog);
