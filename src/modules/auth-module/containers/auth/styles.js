import {disabledBtn, mainColor} from '../../../../constants/colors';
import {fontSizeBody} from '../../../../constants/sizes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  userForm: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputMargin: {
    marginVertical: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '7%',
    paddingVertical: '7%',
  },
  styledButton: {
    marginVertical: 5,
    backgroundColor: mainColor,
    height: 40,
    borderRadius: 5,
    width: '100%',
    elevation: 2,
  },
  forgetButton: {
    backgroundColor: 'transparent',
    height: 40,
    borderRadius: 4,
    borderBottomWidth: 2,
    borderColor: disabledBtn,
    width: '40%',
    alignSelf: 'flex-end',
    marginLeft: 4,
    marginBottom: 16,
  },
  forgetButtonText: {
    textAlign: 'center',
    fontSize: fontSizeBody,
    color: disabledBtn,
  },
  styledGoogleButton: {
    marginVertical: 5,
    backgroundColor: mainColor,
    height: 40,
    borderRadius: 5,
    width: '100%',
    elevation: 2,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  errorText: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
});
