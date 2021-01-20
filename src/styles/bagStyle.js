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
    marginBottom: 15,
  },
  infosItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // maxWidth: 10,
    minWidth: 120,
  },
  changeInfoSect: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 10,
  },
  changeNum: {},
  btnNum: {
    width: 36,
    height: 36,
    maxWidth: 36,
    backgroundColor: '#FFF',
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 36,
  },
  textNumInfo: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
    marginRight: 15,
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    minHeight: 10,
    elevation: 1,
  },
  btnAuth: {
    minHeight: 48,
    minWidth: 10,
    height: 48,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  btnAuth1: {
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
  checkContainer: {
    flex: 1,
    minWidth: 30,
    maxWidth: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default bagStyle;
