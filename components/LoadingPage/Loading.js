import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Logo from '../../UI/Logo/Logo';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Logo />
      <ActivityIndicator size="large" color="#FF003C" style={styles.spinnerr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
  },
  spinnerr: {
    marginTop: 48,
  },
});
