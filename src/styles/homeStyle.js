import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  banner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bannerImage: {
    flex: 1,
    minWidth: '100%',
    position: 'relative',
  },
  textTitle: {
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 30,
    left: 15,
    fontSize: 20,
    fontFamily: 'Metropolis-Bold',
  },
  notifButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    position: 'absolute',
    top: 40,
    right: 30,
  },
  notifOn: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  test: {
    height: 300,
    backgroundColor: 'blue',
  },
});

export default homeStyle;
