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
import {connect} from 'react-redux';
import IconIo from 'react-native-vector-icons/Ionicons';
import {AirbnbRating} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

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
  };

  render() {
    const {item} = this.props.route.params;
    const {products} = this.props.product.productNew.data;
    // console.log(this.props);
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
            {/* <View style={styles.imgWrapper}>
              <ImageBackground source={Images} style={styles.img} />
            </View> */}
            {item.product_images.map((image, i) => {
              // console.log(image);
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
            {/* <Image source={Images} style={styles.img} /> */}
          </ScrollView>
          <View style={styles.containerThree}>
            <Picker
              selectedValue={this.state.language}
              style={styles.secOpt}
              onValueChange={(itemValue, _) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="S" value="java" />
              <Picker.Item label="M" value="js" />
              <Picker.Item label="XL" value="js" />
            </Picker>
            <Picker
              selectedValue={this.state.language}
              style={styles.secOpt}
              onValueChange={(itemValue, _) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="White" value="java" />
              <Picker.Item label="Black" value="js" />
              <Picker.Item label="Green" value="js" />
              <Picker.Item label="Blue" value="js" />
              <Picker.Item label="Red" value="js" />
            </Picker>
            <View style={styles.center}>
              <IconIo name="heart" color="#DB3022" size={20} />
            </View>
          </View>
          <View style={styles.containerOne}>
            <View style={styles.infoSect}>
              <Text style={{...styles.itemTitle, ...{fontWeight: 'bold'}}}>
                {item.product_title}
              </Text>
              <Text style={styles.itemTitle}>${item.product_price}</Text>
            </View>
            <Text style={productsHorizontalStyles.subtitle}>
              {item.product_price}
            </Text>
            <View style={productsHorizontalStyles.starsReview}>
              <AirbnbRating
                isDisabled={true}
                showRating={false}
                size={15}
                starStyle={productsHorizontalStyles.starStyle}
              />
              <Text style={productsHorizontalStyles.reviewNum}>
                ({item.review_user})
              </Text>
            </View>
            <Text style={styles.itemDesc}>{item.product_description}</Text>
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
            <View style={styles.rowOne}>
              <Text style={styles.textNext}>You can also like this</Text>
              <Text style={productsHorizontalStyles.subtitle}>12 items</Text>
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
