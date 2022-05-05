import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function Card({title}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
