import {StyleSheet} from 'react-native';

const chatStyle = StyleSheet.create({
  container: {
    padding: 15,
  },
  textBox1: {
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text1: {
    color: '#000',
    fontSize: 16,
  },
  title1: {
    color: '#000',
    fontSize: 10,
  },
  textBox2: {
    padding: 10,
    backgroundColor: '#273AC7',
    marginBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  text2: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'right',
  },
  title2: {
    color: '#FFF',
    fontSize: 10,
    textAlign: 'right',
  },
  bottomArea: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
  },
});

export default chatStyle;
