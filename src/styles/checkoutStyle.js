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
  changeInfoSect: {
    // display: 'flex',
    // position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    padding: 15,
  },
  btnAuth: {
    minHeight: 48,
    minWidth: 10,
    height: 48,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // elevation: 1,
  },
  btnAuthText: {
    textAlign: 'center',
    // textAlignVertical: 'center',
    marginTop: 14,
    fontFamily: 'Metropolis-Regular',
    color: '#FFF',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default checkoutStyle;
