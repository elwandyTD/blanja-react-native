import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AirbnbRating} from 'react-native-elements';

import styles from '../styles/productsHorizontalStyle';
// import ProductImg from '../assets/images/product-1.png';

const ProductsHorizontal = ({
  title,
  subtitle,
  justList = false,
  products = [],
  link,
  tag = 'New',
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {!justList && (
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View style={styles.viewAllSection}>
            <TouchableOpacity
              onPress={() =>
                // navigation.push('Cart', {
                //   screen: 'Catalog',
                //   params: {
                //     title: title,
                //     link: link,
                //   },
                // }
                navigation.navigate('Cart', {
                  screen: 'Catalog',
                  params: {
                    title: title,
                    link: link,
                  },
                })
              }>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalView}>
        {products.length !== 0 &&
          products.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  navigation.navigate('Detail', {
                    // item: item,
                    id: item.product_id,
                  })
                }>
                <View style={styles.card}>
                  <View style={styles.cardHead}>
                    <ImageBackground
                      source={{
                        uri:
                          'http://192.168.43.216:8000' +
                          item.product_images[0].image_path,
                      }}
                      style={styles.cardImage}>
                      <View style={styles.labelImage}>
                        <Text style={styles.labelText}>{tag}</Text>
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={styles.starsReview}>
                    <AirbnbRating
                      isDisabled={true}
                      showRating={false}
                      defaultRating={
                        item.product_rating
                          ? Math.floor(item.product_rating)
                          : 0
                      }
                      size={15}
                      starStyle={styles.starStyle}
                    />
                    <Text style={styles.reviewNum}>({item.review_user})</Text>
                  </View>
                  <Text style={styles.cardBrand}>{item.brand_name}</Text>
                  <Text style={styles.cardTitle}>{item.product_title}</Text>
                  <Text style={styles.cardPrice}>IDR {item.product_price}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        <View />
      </ScrollView>
    </View>
  );
};

export default ProductsHorizontal;
