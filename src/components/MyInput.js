import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const MyInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test</Text>
      <TextInput onFocus={() => console.log('focus')} />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 1,
    position: 'relative',
    // padding: 10,
    paddingHorizontal: 10,
  },
  title: {
    position: 'absolute',
  },
  input: {
    height: 40,
  },
});
