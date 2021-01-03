import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
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
    left: 10,
    fontSize: 20,
  },
  test: {
    height: 300,
    backgroundColor: 'blue',
  },
});

export default homeStyle;
