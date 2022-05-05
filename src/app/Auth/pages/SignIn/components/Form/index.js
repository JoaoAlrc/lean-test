import React from 'react';
import {View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import colors from '../../../../../../styles/colors';
import styles from './styles';
import {Input} from '../../../../../../UI';

export default function Form({
  validateForm,
  login,
  email,
  setEmail,
  password,
  setPassword,
  loading,
}) {
  const updateEmail = text => {
    setEmail(text);
  };

  const updatePassword = text => {
    setPassword(text);
  };

  return (
    <>
      <View style={styles.viewText}>
        <Text style={styles.title}>LeanTech Test</Text>
      </View>
      <Input
        label="Email"
        placeholder="Type your e-mail adress"
        error={validateForm}
        style={[
          styles.containerInputUnderline,
          validateForm ? {borderColor: colors.RED} : '',
        ]}
        onChangeText={updateEmail}
        value={email}
      />
      <Input
        label="Password"
        placeholder="******"
        secureTextEntry
        error={validateForm}
        onChangeText={updatePassword}
        value={password}
      />
      {validateForm && <Text style={styles.errorText}>Wrong credentials</Text>}
      <View style={styles.viewButton}>
        <TouchableOpacity onPress={login} style={styles.button}>
          {loading ? (
            <ActivityIndicator color={colors.WHITE} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}
