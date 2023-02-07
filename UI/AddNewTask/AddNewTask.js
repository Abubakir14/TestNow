import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function AddNewTaskLogo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/addnewtask.png')}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
  },
  icon: {
    width: 56,
    height: 56,
  },
});
