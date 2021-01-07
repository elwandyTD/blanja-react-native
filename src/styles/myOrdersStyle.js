import {StyleSheet} from 'react-native';

const myOrdersStyle = StyleSheet.create({
  linkItem: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 1,
  },
  textFirst: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    color: '#9B9B9B',
  },
  textLast: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    color: '#222',
  },
  rowStart: {
    flex: 1,
    flexDirection: 'row',
  },
  rowEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default myOrdersStyle;
