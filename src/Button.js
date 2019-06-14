import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button({ onPress, style, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
}
