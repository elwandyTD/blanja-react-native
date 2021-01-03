import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

import {updateTest} from '../public/redux/actionCreators/device';
import Banner from '../assets/images/banner.jpg';
import styles from '../styles/homeStyle';

class Home extends Component {
  state = {
    device: '',
  };

  dispatchUpdateDevice = async (window) => {
    const {dispatch} = this.props;

    await dispatch(updateTest(window));
    console.log(this.props.device);
  };

  componentDidMount() {
    console.log(this.props.device, 'did mount');
    Dimensions.addEventListener('change', ({window}) => {
      this.dispatchUpdateDevice(window);
    });
  }

  componentDidUpdate() {
    console.log(this.props.device, 'did update');
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', ({window}) => {
      this.dispatchUpdateDevice(window);
    });
  }

  render() {
    const {height, width, orientation} = this.props.device;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.banner}>
            <ImageBackground
              source={Banner}
              style={{
                ...styles.bannerImage,
                ...{
                  height: orientation === 'portrait' ? height / 3 : height - 25,
                },
              }}>
              <Text
                style={{
                  ...styles.textTitle,
                  ...{fontSize: width / 10},
                }}>
                Street Clothes
              </Text>
            </ImageBackground>
          </View>
          <Button
            title="Go Test"
            onPress={() => this.props.navigation.push('Test')}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapsStateToProps = ({device}) => {
  return {
    device,
  };
};

export default connect(mapsStateToProps)(Home);
