import {StyleSheet} from 'react-native';

const checkoutStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 15,
  },
  titleInfo: {
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  shippingCart: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 15,
    elevation: 1,
    borderRadius: 8,
  },
  rowInfo: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Metropolis-Regular',
  },
  summaryText: {
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
    color: '#9B9B9B',
    fontWeight: 'bold',
  },
  summaryPrice: {
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
  },
});

export default checkoutStyle;
