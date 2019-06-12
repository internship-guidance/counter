/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
  import {Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Vibration, Share} from 'react-native';
	import AsyncStorage from '@react-native-community/async-storage';
	import styles from './Styles'
	
	
	const instructions = Platform.select({
	  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	  android:
	    'Double tap R on your keyboard to reload,\n' +
	    'Shake or press menu button for dev menu',
	});
  
  const INCREMENT = 1
	export default class App extends Component {
  
    startVibration(){
      Vibration.vibrate()
    }

	  constructor (props) {
	    super(props)
	    this.state = {counter: 1, result: ''}
	    this.onResetPress = this.onResetPress.bind(this)
	    this.onAddPress = this.onAddPress.bind(this)
	    this.onSubstractPress = this.onSubstractPress.bind(this)
			this._shareMessage = this._shareMessage.bind(this)
			this._showResult = this._showResult.bind(this)
    }
		
		_showResult(result){
			this.setState({result})
		}

		_shareMessage(){
			Share.share({message: "My score! "}).then(this._showResult)
		}

    componentDidMount(){
      this.getData()
    }
	
	  onResetPress() {
      this.setState({counter: 0})
      this.startVibration()
	  }
	
	  onAddPress() {
      this.setState({counter: this.state.counter + INCREMENT})
	    let number = INCREMENT
      AsyncStorage.setItem('number', this.state.counter + INCREMENT)
      this.startVibration()
	  }
	
	   onSubstractPress() {
	    this.setState({counter: this.state.counter - INCREMENT})
	    let number = INCREMENT
      AsyncStorage.setItem('number', this.state.counter - INCREMENT)
      this.startVibration()
    }

    // storeData = async () => {
    //   try {
    //     await AsyncStorage.setItem('number', number)
    //   } catch (e) {
    //     // saving error
    //   }
    // }

    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('number')
        if(value !== null) {
        this.setState({counter: value})
        }
      } catch(e) {
        // error reading value
      }
    }
    
	  render() {
	    return (
	    <View style = {styles.view}>
	      <Text style={styles.counter}>
	      {this.state.counter}
	      </Text>
	
	      {/* <TouchableOpacity onPress = {this.onResetPress}>
	      <Text style={styles.reset} title= "Reset" >
	        Reset
	      </Text>
	      </ TouchableOpacity> */}

				<View style={styles.reset}>
				<Button 
				title="Reset"
        onPress = {this.onResetPress}
        color = 'white'
        />
				</View>

	
	      <View style = {styles.subView}>
	      {/* <TouchableOpacity onPress = {this.onSubstractPress}>
	      <Text style={styles.minus} title= "minus" >
	      -
	      </Text>
	      </ TouchableOpacity>
			 */}

				<View style={styles.minus}>
				<Button 
				title="-"
        onPress = {this.onSubstractPress}
        color = 'white'
        />
				</View>

				<View style={styles.plus}>
				<Button 
				title="+"
        onPress = {this.onAddPress}
        color = 'white'
        />
				</View>

	      {/* <TouchableOpacity onPress = {this.onAddPress}>
	      <Text style={styles.plus} title= "plus" >
	      +
	      </Text>
	      </ TouchableOpacity> */}
	      </View>

        <View style={styles.scoreShare}>
        <Button 
        title="Share your score!"
        onPress = {this._shareMessage}
        color = 'white'
        />
        </View>

				<Text>
				{JSON.stringify(this.state.result)}
				</Text>

	    </View>
	
	    );
	  }
	}
	

