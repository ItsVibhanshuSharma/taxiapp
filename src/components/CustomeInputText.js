import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function CustomInputText({value, placeholder, onChangeText}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
  },
});
