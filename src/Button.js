import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './Styles'

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
			<Text style={props.style}>
				{ props.title }
			</Text>
  </ TouchableOpacity>
  );
}
