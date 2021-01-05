import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {AirbnbRating} from 'react-native-elements';

import styles from '../styles/productsHorizontalStyle';
import ProductImg from '../assets/images/product-1.png';

const ProductsHorizontal = ({title, subtitle, justList = false}) => {
  return (
    <View style={styles.container}>
      {!justList && (
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View style={styles.viewAllSection}>
            <Text style={styles.viewAll}>View All</Text>
          </View>
        </View>
      )}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalView}>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <ImageBackground source={ProductImg} style={styles.cardImage}>
              <View style={styles.labelImage}>
                <Text style={styles.labelText}>New</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.starsReview}>
            <AirbnbRating
              isDisabled={true}
              showRating={false}
              size={15}
              starStyle={styles.starStyle}
            />
            <Text style={styles.reviewNum}>(0)</Text>
          </View>
          <Text style={styles.cardBrand}>OVS</Text>
          <Text style={styles.cardTitle}>Blouse</Text>
          <Text style={styles.cardPrice}>30$</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <ImageBackground source={ProductImg} style={styles.cardImage}>
              <View style={styles.labelImage}>
                <Text style={styles.labelText}>New</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.starsReview}>
            <AirbnbRating
              isDisabled={true}
              showRating={false}
              size={15}
              starStyle={styles.starStyle}
            />
            <Text style={styles.reviewNum}>(0)</Text>
          </View>
          <Text style={styles.cardBrand}>OVS</Text>
          <Text style={styles.cardTitle}>Blouse</Text>
          <Text style={styles.cardPrice}>30$</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <ImageBackground source={ProductImg} style={styles.cardImage}>
              <View style={styles.labelImage}>
                <Text style={styles.labelText}>New</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.starsReview}>
            <AirbnbRating
              isDisabled={true}
              showRating={false}
              size={15}
              starStyle={styles.starStyle}
            />
            <Text style={styles.reviewNum}>(0)</Text>
          </View>
          <Text style={styles.cardBrand}>OVS</Text>
          <Text style={styles.cardTitle}>Blouse</Text>
          <Text style={styles.cardPrice}>30$</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <ImageBackground source={ProductImg} style={styles.cardImage}>
              <View style={styles.labelImage}>
                <Text style={styles.labelText}>New</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.starsReview}>
            <AirbnbRating
              isDisabled={true}
              showRating={false}
              size={15}
              starStyle={styles.starStyle}
            />
            <Text style={styles.reviewNum}>(0)</Text>
          </View>
          <Text style={styles.cardBrand}>OVS</Text>
          <Text style={styles.cardTitle}>Blouse</Text>
          <Text style={styles.cardPrice}>30$</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductsHorizontal;
