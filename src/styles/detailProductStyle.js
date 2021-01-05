import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const detailProductStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
  },
  containerOne: {
    padding: 15,
  },
  containerTwo: {
    padding: 15,
    backgroundColor: '#FFF',
    elevation: 1,
  },
  imgWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    maxHeight: 350,
    maxWidth: width,
    resizeMode: 'cover',
  },
  infoSect: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 24,
    color: '#222',
    fontFamily: 'Metropolis-Regular',
  },
  itemDesc: {
    color: '#222',
    fontFamily: 'Metropolis-Regular',
  },
  listInfo: {
    marginTop: -0.4,
    padding: 15,
    borderTopWidth: 0.4,
    borderTopColor: 'rgba(155,155,155,1)',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textNext: {
    fontFamily: 'Metropolis-Regular',
    fontSize: 18,
    color: '#222',
  },
});

export default detailProductStyle;
