import {StyleSheet} from 'react-native';

const productsHorizontalStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
    color: '#222222',
  },
  subtitle: {
    color: '#9B9B9B',
    fontSize: 11,
    fontFamily: 'Metropolis-Regular',
    marginTop: -5,
  },
  viewAllSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewAll: {
    color: '#222222',
    fontSize: 11,
    fontFamily: 'Metropolis-Regular',
  },
  horizontalView: {
    marginTop: 20,
  },
  card: {
    marginRight: 15,
  },
  cardHead: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardImage: {
    flex: 1,
    height: 184,
    width: 148,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
  },
  labelImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    height: 24,
    width: 40,
    backgroundColor: '#222222',
    borderRadius: 29,
  },
  labelText: {
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Metropolis-Regular',
  },
  starsReview: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  starStyle: {
    margin: 2,
    padding: 0,
  },
  reviewNum: {
    color: '#9B9B9B',
    fontSize: 10,
    marginLeft: 2,
  },
  cardBrand: {
    color: '#9B9B9B',
    fontSize: 11,
    fontFamily: 'Metropolis-Regular',
    marginTop: 5,
  },
  cardTitle: {
    color: '#222222',
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'bold',
  },
  cardPrice: {
    color: '#222222',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
});

export default productsHorizontalStyle;
