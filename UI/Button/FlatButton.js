import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({
  text,
  onPress,
  style,
  textStyle,
  disabled,
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={style}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
