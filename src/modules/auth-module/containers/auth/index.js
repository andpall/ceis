import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';

import styles from './styles';
import * as authRoutes from '../../constants/routes';
import {setUsername} from '../../actions/setUsername';
import GoogleLoginButton from './components/googleButton';

function LoginScreen(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    username: yup.string().min(5).max(20).required(),
    password: yup.string().min(8).required(),
  });

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const handleLogin = async (googleLogin = false) => {
    await schema.validate({username, password});
    setUserName('');
    setPassword('');
    dispatch(setUsername(username));
  };

  const handleRecoverPass = () => {
    props.navigation.navigate(authRoutes.RECOVER_PASS_SCREEN);
  };

  const handleRegister = () => {
    props.navigation.navigate(authRoutes.REGISTRATION_SCREEN);
  };

  const onIconPress = () => setSecure(!secure);

  return (
    <KeyboardAwareScrollView
      extraHeight={100}
      style={styles.screenContainer}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps={'handled'}
      bounces={false}>
      <View style={styles.userForm}>
        <TextInput
          label={'placeholder.email'}
          autoCapitalize={'none'}
          autoCorrect={false}
          spellCheck={false}
          text={username}
          onChange={input => setUserName(input)}
          containerStyle={styles.inputMargin}
        />
        <TextInput
          iconName={secure ? 'ios-eye-outline' : 'ios-eye-off-outline'}
          label={'placeholder.password'}
          text={password}
          onChange={input => setPassword(input)}
          containerStyle={styles.inputMargin}
          onIconPress={onIconPress}
          secure={secure}
        />
        <Button
          title="auth.forgot_pass"
          onPress={handleRecoverPass}
          textStyle={styles.forgetButtonText}
          containerStyle={styles.forgetButton}
        />
      </View>
      <Text style={styles.errorText}>
        {errorMessage !== '' ? errorMessage : ' '}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          fetching={props.fetching}
          title="buttons.unlock"
          onPress={() => handleLogin(false)}
          containerStyle={styles.styledButton}
        />
        <GoogleLoginButton
          containerStyle={styles.styledGoogleButton}
          onPress={() => handleLogin(true)}
        />
        <Button
          title="auth.register_new_account"
          onPress={handleRegister}
          containerStyle={styles.styledButton}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default LoginScreen;
