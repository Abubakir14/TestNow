import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../UI/Return/CustomTextInput';

export default function RetBar({navigation}) {
  return (
    <View
      style={styles.retBar}
      onPress={() => navigation.navigate('AddTodoInput', {name: 'Welcome'})}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/vector.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <CustomTextInput text="Вернуться назад" />
    </View>
  );
}

const styles = StyleSheet.create({
  retBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
  },
  icon: {
    width: 21,
    height: 24,
    marginRight: 30,
  },
});
