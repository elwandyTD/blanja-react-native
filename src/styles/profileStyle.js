import {StyleSheet} from 'react-native';

const splashScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 15,
  },
  title: {
    color: '#222',
    fontFamily: 'Metropolis-Bold',
    fontSize: 34,
  },
  rowInfo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  username: {
    fontSize: 18,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
  },
  email: {
    color: '#9B9B9B',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  linkContainer: {},
  linkItem: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkTitle: {
    fontSize: 16,
    color: '#222',
    fontFamily: 'Metropolis-Regular',
  },
  linkSub: {
    fontSize: 11,
    color: '#9B9B9B',
    fontFamily: 'Metropolis-Regular',
  },
});

export default splashScreenStyle;
