import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';

import styles from '../styles/homeStyle';

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.banner}>
            <Text>Home</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
