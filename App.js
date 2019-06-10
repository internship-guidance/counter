/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, AsyncStorage} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {counter: 0}
    this.onResetPress = this.onResetPress.bind(this)
    this.onAddPress = this.onAddPress.bind(this)
    this.onSubstractPress = this.onSubstractPress.bind(this)
    this.increment = {increment: 10}
  }

  onResetPress() {
    this.setState({counter: 0})
  }

  onAddPress() {
    this.setState({counter: this.state.counter + this.increment.increment})
  }

  onSubstractPress() {
    this.setState({counter: this.state.counter - this.increment.increment})
    let number = this.increment.increment
    AsyncStorage.setItem = ('number', number)
  }

  render() {
    return (
    <View style = {styles.view}>
      <Text style={styles.counter}>
      {this.state.counter}
      </Text>

      <TouchableOpacity onPress = {this.onResetPress}>
      <Text style={styles.reset} title= "Reset" >
        Reset
      </Text>
      </ TouchableOpacity>
      
      <View style = {styles.subView}>
      <TouchableOpacity onPress = {this.onSubstractPress}>
      <Text style={styles.minus} title= "minus" >
      -
      </Text>
      </ TouchableOpacity>

      <TouchableOpacity onPress = {this.onAddPress}>
      <Text style={styles.plus} title= "plus" >
      +
      </Text>
      </ TouchableOpacity>
      </View>
    </View>
    
    );
  }
}

const styles = StyleSheet.create ({
  view: {
    justifyContent: "center", 
    alignItems: "center",
    flex: 1,
    backgroundColor: '#232528',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: '#232528',
  },
  counter: {
    fontSize: 100,
    color: 'white',
    padding: 100,
    margin: 10
  },
  reset: {
    alignItems: "center",
    textAlign: 'center',
    backgroundColor: '#5B8930',
    fontSize: 30,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
    padding: 10,
    width: 365,
    margin: 5
  },
  plus: {
    backgroundColor: '#8DB255',
    fontSize: 50,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 75,
    margin: 5
  },
  minus: {
    backgroundColor: '#8DB255',
    fontSize: 50,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 75,
    margin: 5
  }
})