import React, {Component} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

import MyHeader from '../components/Header';
import authStyle from '../styles/authStyle';

export class AddProduct extends Component {
  state = {
    test: '',
    label: 'Test',
  };

  render() {
    return (
      <>
        <MyHeader title="Add Product" />
        <ScrollView>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Save address as</Text>
            <TextInput
              style={authStyle.inputForm}
              placeholder={'address name ...'}
              value={this.state.test}
              onChangeText={(e) => this.handleInput(e, 'title')}
            />
          </View>
          <View style={authStyle.textInput}>
            <Text style={authStyle.label}>Save address as</Text>
            <Picker
              selectedValue={this.state.label}
              mode="dropdown"
              style={authStyle.inputForm}
              onValueChange={(itemValue, _) =>
                this.setState({label: itemValue})
              }>
              <Picker.Item label="Test" value="Test" />
              <Picker.Item label="Test 2" value="Test2" />
              <Picker.Item label="Test 3" value="Test3" />
            </Picker>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = ({product}) => ({product});

export default connect(mapStateToProps)(AddProduct);
