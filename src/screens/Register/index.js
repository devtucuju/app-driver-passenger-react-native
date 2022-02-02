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
import {emailValidator, passwordValidator, nameValidator} from '../../utils';
import {theme} from '../../styles/theme';
import {BackButton} from '_components/BackButton';

function Register({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const status = useSelector(state => state.auth.status);

  // useEffect(() => {
  //   if (auth.email && auth.pass) {
  //     setEmail({value: auth.email, error: ''});
  //     setPassword({value: auth.pass, error: ''});
  //   }
  //   return () => {
  //     null;
  //   };
  // }, [auth.email, auth.pass]);

  const handleSignUp = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  const handleRegister = () => {
    navigation.navigate('Login');
  };
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Criar Conta</Header>
      <TextInput
        label="Nome"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
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
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleSignUp} style={{marginTop: 24}}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text style={styles.question}>Já é cadastrado? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
export {Register};

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
