import React, {useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function Welcome({navigation}) {
  useEffect(() => {
    isLogged();
  }, []);

  const isLogged = async () => {
    // const token = await AsyncStorage.getItem('@35mais:token');
    const token = await AsyncStorage.getItem('LeanToken');
    if (token) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.title}>LeanTech Test</Text>
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.button}>
          <Text style={styles.whiteText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
