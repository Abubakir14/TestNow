import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/group.png')} style={styles.icon} />
      <Text style={styles.textshop}>AzaliaNow</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 18,
  },
  textshop: {
    width: 172,
    height: 52,
    color: '#FF003C',
    fontSize: 36,
  },
});

export default Logo;
