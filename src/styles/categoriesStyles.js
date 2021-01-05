import {StyleSheet} from 'react-native';

const categoriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  infoContainer: {
    padding: 15,
  },
  textInfo: {
    fontSize: 14,
    color: '#9B9B9B',
    fontFamily: 'Metropolis-Regular',
    marginTop: 20,
  },
  categoriesContainer: {
    marginTop: 0,
  },
  btnCategory: {
    height: 45,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    elevation: 0,
    borderBottomWidth: 0.4,
    borderBottomColor: 'rgba(155,155,155,.4)',
    paddingHorizontal: 30,
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
  },
});

export default categoriesStyles;
