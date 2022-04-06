import {lightBack} from '../../../../../../constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
  },
  text: {
    color: lightBack,
    fontSize: 18,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    flex: 1,
  },
  iconHolder: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: '100%',
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    height: 24,
    width: 24,
    borderRadius: 5,
    alignContent: 'flex-start',
  },
});
