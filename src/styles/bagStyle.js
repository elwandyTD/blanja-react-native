import {StyleSheet} from 'react-native';

const bagStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 15,
  },
  titleBag: {
    fontSize: 34,
    color: '#222',
    fontFamily: 'Metropolis-Bold',
  },
  infosItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  changeInfoSect: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changeNum: {},
  btnNum: {
    width: 36,
    height: 36,
    backgroundColor: '#FFF',
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textNumInfo: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    padding: 15,
  },
});

export default bagStyle;
