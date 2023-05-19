import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Buttons = ({ title, onPress, className }) => {
  return (
    <TouchableOpacity style={className} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonText: {
      fontSize: 24,
      color: '#333333',
    }
  });

export default Buttons;
