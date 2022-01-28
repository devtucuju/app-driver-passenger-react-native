import React, {useState} from 'react';
import {Background} from '../../components/Background';
import {BackButton} from '../../components/BackButton';
import {Header} from '../../components/Header';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {emailValidator} from '../../utils';

function Forgot({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Esqueceu a senha?</Header>
      <TextInput
        label="Email"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Você receberá um e-mail com o link de redefinição de senha."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{marginTop: 16}}>
        enviar
      </Button>
    </Background>
  );
}
export {Forgot};
