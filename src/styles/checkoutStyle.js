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
    elevation: 2,
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
  changeInfoSect: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  paymentItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  paymentSec: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paymentSecImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 64,
    height: 38,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  paymentImg1: {
    height: 25,
    width: 32,
  },
  paymentImg2: {
    height: 26,
    width: 40,
  },
  paymentImg3: {
    height: 11,
    width: 50,
  },
  paymentText: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Metropolis-Regular',
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    paddingTop: 20,
  },
  btnAuth: {
    minHeight: 48,
    minWidth: 10,
    height: 48,
    borderRadius: 25,
    backgroundColor: '#DB3022',
  },
  btnAuthText: {
    textAlign: 'center',
    marginTop: 14,
    fontFamily: 'Metropolis-Regular',
    color: '#FFF',
  },
});

export default checkoutStyle;
