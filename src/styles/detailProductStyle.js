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
    minHeight: 80,
  },
  containerThree: {
    padding: 15,
    // backgroundColor: '#FFF',
    display: 'flex',
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    // maxHeight: 350,
    height: 350,
    width: width,
    maxWidth: width,
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
    maxWidth: 200,
  },
  itemDesc: {
    color: '#222',
    fontFamily: 'Metropolis-Regular',
    marginTop: 5,
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
  btnAuth: {
    height: 48,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  btnAuthText: {
    fontFamily: 'Metropolis-Regular',
    color: '#FFF',
  },
  rowOne: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secOpt: {
    height: 40,
    borderRadius: 8,
    width: 130,
    elevation: 1,
    backgroundColor: '#FFF',
    marginRight: 15,
    overflow: 'hidden',
  },
  center: {
    minWidth: 36,
    maxWidth: 36,
    minHeight: 36,
    borderRadius: 36,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: '#FFF',
  },
});

export default detailProductStyle;
