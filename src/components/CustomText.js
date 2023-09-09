import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomText = ({style, children, onPress}) => {
  if (onPress) {
    // If onPress is provided, wrap the text in a TouchableOpacity
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, style]}>{children}</Text>
      </TouchableOpacity>
    );
  }

  // If no onPress is provided, render the text as is
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto', // Customize the font family
    fontSize: 16, // Customize the font size
    color: '#333', // Customize the text color
  },
});

export default CustomText;
