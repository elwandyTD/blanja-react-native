import {StyleSheet} from 'react-native';

const splashScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInner: {
    maxWidth: 250,
  },
  image: {
    width: 220,
    height: 210,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
    color: '#222',
    textAlign: 'center',
    marginTop: 20,
  },
  sub: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
  },
  btnAuth: {
    maxHeight: 48,
    elevation: 1,
    backgroundColor: '#DB3022',
    borderRadius: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  btnAuthText: {
    fontFamily: 'Metropolis-Regular',
    color: '#FFF',
  },
});

export default splashScreenStyle;
