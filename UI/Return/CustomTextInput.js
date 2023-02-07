import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function CustomTextInput({text}) {
  return (
    <View style={styles.customInput}>
      <Text style={styles.customInputText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  customInputText: {
    fontSize: 28,
    color: '#999999',
  },
});
