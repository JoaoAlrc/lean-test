import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthServices from '../../services';
import styles from './styles';
import {Form} from './components';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [validateForm, setValidateForm] = useState(false);
  const dispatch = useDispatch();

  const login = async () => {
    setLoading(true);
    await AuthServices.logIn({email, password})
      .then(async ({access_token, name}) => {
        if (access_token) {
          await AsyncStorage.setItem('LeanToken', access_token);
          dispatch({
            type: 'CHANGE_USER',
            data: {email, token: access_token, name},
          });
          setLoading(false);
          return navigation.navigate('Home');
        }
      })
      .catch(err => err);

    setPassword('');
    setLoading(false);
    setValidateForm(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form
        {...{
          validateForm,
          login,
          email,
          setEmail,
          password,
          setPassword,
          loading,
        }}
      />
    </SafeAreaView>
  );
}
