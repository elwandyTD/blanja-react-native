import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import IconF from 'react-native-vector-icons/Fontisto';
import {connect} from 'react-redux';
import {getCategories} from '../public/redux/actionCreators/attribute';

import styles from '../styles/categoriesStyles';
import authStyles from '../styles/authStyle';

import Header from '../components/Header';
class Cart extends Component {
  iconRight = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Search')}
        style={styles.btnArrow}>
        <IconF
          name="search"
          size={18}
          style={styles.iconRight}
          color="#222222"
        />
      </TouchableOpacity>
    );
  };

  getCategoriesDispatch = async () => {
    const {dispatch} = this.props;

    await dispatch(getCategories());
  };

  componentDidMount() {
    this.getCategoriesDispatch();
    // if (!this.props.attribute.data) {
    // }
  }

  render() {
    const {data} = this.props.attribute.categories;
    // console.log(this.props.attribute.data);
    return (
      <>
        <Header title="Categories" component={this.iconRight} />
        <ScrollView style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <View style={styles.infoContainer}>
            <TouchableOpacity
              style={{...authStyles.btnAuth, ...{marginTop: 0}}}
              onPress={() =>
                this.props.navigation.navigate('Catalog', {
                  title: 'Show All',
                  link: '?category=shoes&size=l',
                })
              }>
              <Text style={authStyles.btnAuthText}>VIEW ALL ITEMS</Text>
            </TouchableOpacity>
            <Text style={styles.textInfo}>Choose Category</Text>
          </View>
          <View style={styles.categoriesContainer}>
            {data &&
              data.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={styles.btnCategory}
                    onPress={() =>
                      this.props.navigation.navigate('Catalog', {
                        title: item.category_name,
                        link: '?category=' + item.category_link,
                      })
                    }>
                    <Text style={styles.btnText}>{item.category_name}</Text>
                  </TouchableOpacity>
                );
              })}
            {/* <TouchableOpacity
              style={styles.btnCategory}
              onPress={() =>
                this.props.navigation.navigate('Catalog', {title: 'Tops'})
              }>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={styles.btnCategory}>
              <Text style={styles.btnText}>Tops</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapsStateToProps = ({attribute}) => {
  return {
    attribute,
  };
};

export default connect(mapsStateToProps)(Cart);
