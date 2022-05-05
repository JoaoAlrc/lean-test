import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {colors} from '~/styles';
import styles from './styles';

function SEInput({
  label,
  onChangeText,
  value,
  maxLength,
  placeholder,
  error,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <View style={[styles.bgLabel, {backgroundColor: colors.WHITE}]}>
        <Text style={styles.txtBgLabel}>{label}</Text>
      </View>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        autoCapitalize="none"
        style={[
          styles.select,
          {
            backgroundColor: colors.WHITE,
            borderColor: error ? colors.RED : colors.GOLD,
          },
        ]}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </View>
  );
}

export default SEInput;
