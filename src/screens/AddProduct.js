import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';

import {
  getCategories,
  getBrands,
  getColor,
  getSizes,
} from '../public/redux/actionCreators/attribute';
import {postProduct} from '../public/redux/actionCreators/product';
import MyHeader from '../components/Header';
import authStyle from '../styles/authStyle';

export class AddProduct extends Component {
  state = {
    test: '',
    label: 'Test',
    multiple: [],
    categories: [],
    sizes: [],
    colors: [],
    brands: [],
    selectSize: [],
    selectColor: [],
    // lcolor: 10,
    // lsize: 22,
    product: {
      title: '',
      stock: '',
      price: '',
      condition: 'New',
      brand: '',
      category: '',
      desc: '',
    },
  };

  getAttributeDispatch = async () => {
    const {dispatch} = this.props;
    // let category = this.props.attribute.categories;
    const a = this.props.attribute.categories;
    const b = this.props.attribute.brands;
    const c = this.props.attribute.colors;
    const d = this.props.attribute.sizes;

    if (!a.data) {
      await dispatch(getCategories());
    }
    if (!b.data) {
      await dispatch(getBrands());
    }
    if (!c.data) {
      await dispatch(getColor());
    }
    if (!d.data) {
      await dispatch(getSizes());
    }

    const {categories, brands, colors, sizes} = this.props.attribute;

    this.setState({
      categories: categories.data,
      brands: brands.data,
      colors: colors.data,
      sizes: sizes.data,
      product: {
        ...this.state.product,
        category: categories.data[0].category_id,
        brand: brands.data[0].brand_id,
      },
    });
  };

  handleColor = (value) => {
    if (value !== false) {
      this.setState({
        lcolor: value,
        selectColor: [...this.state.selectColor, value],
      });
    }
  };

  handleSize = (value) => {
    if (value !== false) {
      this.setState({
        lsize: value,
        selectSize: [...this.state.selectSize, value],
      });
    }
  };

  handleInput = (value, name) => {
    this.setState({
      product: {
        ...this.state.product,
        [name]: value,
      },
    });
  };

  selectMultipleFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });

      this.setState({
        multiple: results,
      });
      // console.log(results);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log(JSON.stringify(err));
        throw err;
      }
    }
  };

  onSubmit = async () => {
    const {user_id, token} = this.props.route.params.user;
    const {dispatch} = this.props;

    let formData = new FormData();
    formData.append('product_title', this.state.product.title);
    formData.append('brand_id', this.state.product.brand);
    formData.append('category_id', this.state.product.category);
    formData.append('product_price', this.state.product.price);
    formData.append('product_qty', this.state.product.stock);
    formData.append('user_id', user_id);
    formData.append('product_condition', this.state.product.condition);
    formData.append('product_description', this.state.product.desc);
    for (let i = this.state.multiple.length - 1; i >= 0; i--) {
      formData.append('upload_images', this.state.multiple[i]);
    }

    await dispatch(postProduct(formData, token));
    const {insert} = this.props.product;

    if (insert.data) {
      this.props.navigation.push('Seller Products');
    }
  };

  componentDidMount() {
    this.getAttributeDispatch();
  }

  render() {
    return (
      <>
        <MyHeader title="Add Product" />
        <ScrollView style={styles.container}>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Product name</Text>
            <TextInput
              style={authStyle.inputForm}
              placeholder={'address name ...'}
              value={this.state.product.title}
              onChangeText={(e) => this.handleInput(e, 'title')}
            />
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Category</Text>
            <Picker
              selectedValue={this.state.product.category}
              mode="dropdown"
              style={authStyle.inputForm}
              onValueChange={(itemValue, _) =>
                this.handleInput(itemValue, 'category')
              }>
              {this.state.categories &&
                this.state.categories.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.category_name}
                      key={i}
                      value={item.category_id}
                    />
                  );
                })}
            </Picker>
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Brand</Text>
            <Picker
              selectedValue={this.state.product.brand}
              mode="dropdown"
              style={authStyle.inputForm}
              onValueChange={(itemValue, _) =>
                this.handleInput(itemValue, 'brand')
              }>
              {this.state.brands &&
                this.state.brands.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.brand_name}
                      key={i}
                      value={item.brand_id}
                    />
                  );
                })}
            </Picker>
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Color</Text>
            <Picker
              selectedValue={this.state.lcolor}
              mode="dropdown"
              style={authStyle.inputForm}
              onValueChange={(itemValue, _) => this.handleColor(itemValue)}>
              <Picker.Item label={'Choose'} value={false} />
              {this.state.colors &&
                this.state.colors.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.color_name}
                      key={i}
                      value={item.color_id}
                    />
                  );
                })}
            </Picker>
            <Text style={authStyle.label}>
              colors: {JSON.stringify(this.state.selectColor)}
            </Text>
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Size</Text>
            <Picker
              selectedValue={this.state.lsize}
              mode="dropdown"
              style={authStyle.inputForm}
              onValueChange={(itemValue, _) => this.handleSize(itemValue)}>
              <Picker.Item label={'Choose'} value={false} />
              {this.state.sizes &&
                this.state.sizes.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.size_value.toUpperCase()}
                      key={i}
                      value={item.size_id}
                    />
                  );
                })}
            </Picker>
            <Text style={authStyle.label}>
              size: {JSON.stringify(this.state.selectSize)}
            </Text>
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Stock</Text>
            <TextInput
              style={authStyle.inputForm}
              placeholder={'stock product ...'}
              keyboardType="numeric"
              value={this.state.product.stock}
              onChangeText={(e) => this.handleInput(e, 'stock')}
            />
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Price</Text>
            <TextInput
              style={authStyle.inputForm}
              placeholder={'product price ...'}
              keyboardType="numeric"
              value={this.state.product.price}
              onChangeText={(e) => this.handleInput(e, 'price')}
            />
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Condition</Text>
            <Picker
              selectedValue={this.state.product.condition}
              mode="dropdown"
              style={authStyle.inputForm}
              onValueChange={(itemValue, _) =>
                this.handleInput(itemValue, 'condition')
              }>
              <Picker.Item label="New" value="New" />
              <Picker.Item label="Used" value="Used" />
            </Picker>
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>
              Image of product ({this.state.multiple.length})
            </Text>
            <Button title="Test" onPress={this.selectMultipleFile} />
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Description</Text>
            <TextInput
              style={authStyle.inputForm}
              placeholder={'product desc ...'}
              value={this.state.product.desc}
              onChangeText={(e) => this.handleInput(e, 'desc')}
            />
          </View>
          <TouchableOpacity
            style={{...authStyle.btnAuth, ...{marginBottom: 50}}}
            onPress={this.onSubmit}>
            <Text style={authStyle.btnAuthText}>ADD PRODUCT</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

const mapStateToProps = ({product, attribute}) => ({product, attribute});

export default connect(mapStateToProps)(AddProduct);
