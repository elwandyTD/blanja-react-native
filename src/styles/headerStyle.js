import {StyleSheet} from 'react-native';

const headerStyle = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#F9F9F9',
    borderBottomColor: '#F9F9F9',
    elevation: 1,
  },
  btnArrow: {
    width: 30,
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrBack: {
    height: 16,
    width: 9.5,
  },
  centerTitle: {
    fontSize: 18,
    fontFamily: 'Metropolis-Regular',
    color: '#1F2A36',
  },
});

export default headerStyle;
