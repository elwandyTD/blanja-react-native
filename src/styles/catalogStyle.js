import {StyleSheet} from 'react-native';

const catalogStyle = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
    elevation: 1,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
    color: '#222',
  },
  filterSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 6,
    marginTop: 10,
  },
  rowInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  filtersIcon: {
    width: 12,
    height: 10,
  },
  textIcon: {
    fontSize: 11,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
    marginLeft: 3,
  },
  itemsContainer: {
    padding: 15,
  },
  cardItem: {
    minHeight: 110,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
  cardImage: {
    maxWidth: 110,
    minWidth: 110,
    height: 110,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    padding: 10,
    position: 'relative',
  },
  cardTitle: {
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    // maxWidth: 100,
    overflow: 'hidden',
  },
  cardBrand: {
    fontSize: 11,
    fontFamily: 'Metropolis-Regular',
    color: '#9B9B9B',
  },
  cardPrice: {
    fontFamily: 'Metropolis-Regular',
    fontSize: 14,
    color: '#222',
  },
  bottomSheet: {
    backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
  },
  bottomSheetTitle: {
    fontSize: 18,
    color: '#222',
    fontFamily: 'Metropolis-Regular',
  },
  bottomItem: {
    fontSize: 16,
    color: '#222',
    fontFamily: 'Metropolis-Regular',
  },
});

export default catalogStyle;
