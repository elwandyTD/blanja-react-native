import {StyleSheet} from 'react-native';

const shippingAddressStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 15,
  },
  btnAddress: {
    height: 48,
    borderRadius: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  btnAddressText: {
    fontFamily: 'Metropolis-Regular',
    color: '#222',
  },
});

export default shippingAddressStyle;
