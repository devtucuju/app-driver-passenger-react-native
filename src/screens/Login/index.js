import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setEmailField, setPasswordField} from '_actions/AuthAction';
import {Text} from 'react-native-paper';
import {Background} from '_components/Background';
import {Logo} from '_components/Logo';
import {Header} from '_components/Header';
import {TextInput} from '_components/TextInput';
import {Button} from '_components/Button';
import {emailValidator, passwordValidator} from '../../utils';
import {theme} from '../../styles/theme';

function Login({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const status = useSelector(state => state.auth.status);

  useEffect(() => {
    if (auth.email && auth.pass) {
      setEmail({value: auth.email, error: ''});
      setPassword({value: auth.pass, error: ''});
    }
    return () => {
      null;
    };
  }, [auth.email, auth.pass]);

  const handleLogin = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <Background>
      {/* <Logo /> */}
      <Header>Login</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        // onChangeText={text => setEmail({value: text, error: ''})}
        onChangeText={text => dispatch(setEmailField({value: text, error: ''}))}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        // onChangeText={text => setPassword({value: text, error: ''})}
        onChangeText={text =>
          dispatch(setPasswordField({value: text, error: ''}))
        }
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ResetPasswordScreen')}
          onPress={() => {}}>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="outlined" onPress={handleLogin}>
        Login
      </Button>
      <View style={styles.row}>
        <Text style={styles.question}>Não tem uma conta? </Text>
        {/* <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')} */}
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.link}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
export {Login};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  question: {
    color: theme.colors.secondary,
  },
});
