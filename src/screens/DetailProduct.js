import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {AirbnbRating} from 'react-native-elements';

import productsHorizontalStyles from '../styles/productsHorizontalStyle';
import authStyles from '../styles/authStyle';
import styles from '../styles/detailProductStyle';

import Header from '../components/Header';
import ProductsHorizontal from '../components/ProductsHorizontal';

export class DetailProduct extends Component {
  render() {
    return (
      <>
        <Header title="Short dress" />
        <ScrollView style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <ScrollView horizontal={true} style={styles.containerHorizontal}>
            <View style={styles.imgWrapper}>
              <ImageBackground source="" style={styles.img} />
            </View>
          </ScrollView>
          <View style={styles.containerOne}>
            <View style={styles.infoSect}>
              <Text style={{...styles.itemTitle, ...{fontWeight: 'bold'}}}>
                H&M
              </Text>
              <Text style={styles.itemTitle}>$18.88</Text>
            </View>
            <Text style={productsHorizontalStyles.subtitle}>
              Short black dress
            </Text>
            <View style={productsHorizontalStyles.starsReview}>
              <AirbnbRating
                isDisabled={true}
                showRating={false}
                size={15}
                starStyle={productsHorizontalStyles.starStyle}
              />
              <Text style={productsHorizontalStyles.reviewNum}>(0)</Text>
            </View>
            <Text style={styles.itemDesc}>
              Short dress in soft cotton jersey with decorative buttons down the
              front and a wide, frill-trimmed square neckline with concealed
              elastication. Elasticated seam under the bust and short puff
              sleeves with a small frill trim.
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
                <Text>Shipping Info</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOne}>
            <View>
              <Text style={styles.textNext}>You can also like this</Text>
              <Text style={productsHorizontalStyles.subtitle}>12 items</Text>
            </View>
          </View>
          <ProductsHorizontal />
        </ScrollView>
        <View style={styles.containerTwo}>
          <TouchableOpacity style={{...authStyles.btnAuth, ...{marginTop: 0}}}>
            <Text style={authStyles.btnAuthText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default DetailProduct;
