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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  imageUser: {
    maxWidth: 64,
    maxHeight: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    borderRadius: 64,
    marginRight: 15,
  },
  username: {
    fontSize: 18,
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'bold',
    color: '#222',
  },
  email: {
    color: '#9B9B9B',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  linkContainer: {
    marginTop: 30,
  },
  linkCard: {
    backgroundColor: '#FFF',
    elevation: 1,
    padding: 15,
    marginBottom: 15,
  },
  linkItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7.5,
    marginBottom: 5,
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
