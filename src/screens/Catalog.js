import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import IconF from 'react-native-vector-icons/Fontisto';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import stylesIcon from '../styles/categoriesStyles';
import stylesProductHorizontal from '../styles/productsHorizontalStyle';
import styles from '../styles/catalogStyle';
import FilterIcon from '../assets/icons/filter.png';
import MiscIcon from '../assets/icons/categories.png';
import ProductImage from '../assets/images/product-1.png';

import Header from '../components/Header';

class Catalog extends Component {
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

  render() {
    const {title} = this.props.route.params;
    return (
      <>
        <Header title=" " component={this.iconRight} color="#FFF" />
        <ScrollView>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <View style={styles.containerTop}>
            <Text style={styles.title}>
              {title ? title : 'Search All hehe'}
            </Text>
            <View style={styles.filterSection}>
              <View style={styles.rowInfo}>
                <Image source={FilterIcon} style={styles.filtersIcon} />
                <Text style={styles.textIcon}>Filters</Text>
              </View>
              <View style={{...styles.rowInfo, ...{marginLeft: -100}}}>
                <IconMI name="swap-vert" size={16} color="#222" />
                <Text style={styles.textIcon}>Price: lowest to high</Text>
              </View>
              <View>
                <Image source={MiscIcon} style={styles.filtersIcon} />
              </View>
            </View>
          </View>
          <View style={styles.itemsContainer}>
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
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Catalog;
