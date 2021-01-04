import React, {Component} from 'react';
import {connect} from 'react-redux';
import IconF from 'react-native-vector-icons/Feather';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

import ProductsHorizontal from '../components/ProductsHorizontal';
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
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ScrollView>
          <View style={styles.banner}>
            <ImageBackground
              source={Banner}
              style={{
                ...styles.bannerImage,
                ...{
                  height:
                    orientation === 'portrait' ? height / 2.5 : height - 25,
                },
              }}>
              <Text
                style={{
                  ...styles.textTitle,
                  ...{fontSize: width / 10},
                }}>
                Street Clothes
              </Text>
              <TouchableOpacity
                style={styles.notifButton}
                onPress={() => this.props.navigation.push('Notification')}>
                <IconF name="bell" color="white" style={styles.notifIcon} />
                <View style={styles.notifOn} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <ProductsHorizontal
            title="New"
            subtitle="You've never seen it before!"
          />
          <ProductsHorizontal
            title="Popular"
            subtitle="You've never seen it before!"
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
