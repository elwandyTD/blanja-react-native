import {StyleSheet} from 'react-native';

const authStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 34,
    color: '#222',
    fontFamily: 'Metropolis-Bold',
    padding: 15,
    marginTop: 15,
  },
  formSection: {
    marginTop: 60,
    paddingHorizontal: 15,
  },
  infoText: {
    color: '#222',
    fontFamily: 'Metropolis-Regular',
    marginBottom: 7.5,
  },
  infoTextError: {
    color: '#F01F0E',
    fontFamily: 'Metropolis-Regular',
    marginBottom: 7.5,
  },
  textInput: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    padding: 10,
    paddingBottom: 0,
    marginVertical: 7.5,
    elevation: 1,
  },
  label: {
    fontSize: 11,
    color: '#9B9B9B',
    fontFamily: 'Metropolis-Regular',
  },
  rightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rightSecText: {
    color: '#222222',
    fontFamily: 'Metropolis-Regular',
  },
  btnAuth: {
    height: 48,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    marginTop: 30,
  },
  btnAuthText: {
    fontFamily: 'Metropolis-Regular',
    color: '#FFF',
  },
});

export default authStyle;
