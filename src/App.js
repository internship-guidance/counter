/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, Vibration, Share } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './Styles';
import CustomButton from './Button';

const INCREMENT = 1;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1, result: '' };
    this.onResetPress = this.onResetPress.bind(this);
    this.onAddPress = this.onAddPress.bind(this);
    this.onSubstractPress = this.onSubstractPress.bind(this);
    this.shareMessage = this.shareMessage.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onResetPress() {
    this.setState({ counter: 0 });
    Vibration.vibrate();
  }

  onAddPress() {
    const { counter } = this.state;

    const updatedCounter = counter + INCREMENT;

    this.setState({ counter: updatedCounter });
    AsyncStorage.setItem('number', updatedCounter);
    Vibration.vibrate();
  }

  onSubstractPress() {
    const { counter } = this.state;

    const updatedCounter = counter - INCREMENT;

    this.setState({ counter: updatedCounter });
    AsyncStorage.setItem('number', updatedCounter);
    Vibration.vibrate();
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('number');
      if (value !== null) {
        this.setState({ counter: value });
      }
    } catch (e) {
      console.log(e);
    }
  }

  showResult(result) {
    this.setState({ result });
  }

  shareMessage() {
    Share.share({ message: 'My score! ' }).then(this.showResult);
  }

  render() {
    const { counter, result } = this.state;

    return (
      <View style={styles.view}>
        <Text style={styles.counter}>{counter}</Text>
        <CustomButton
          title="Reset"
          style={styles.reset}
          onPress={this.onResetPress}
        />
        <View style={styles.subView}>
          <CustomButton
            title="-"
            style={styles.minus}
            onPress={this.onSubstractPress}
          />
          <CustomButton
            title="+"
            style={styles.plus}
            onPress={this.onAddPress}
          />
        </View>
        <CustomButton
          title="Share your score!"
          style={styles.scoreShare}
          onPress={this.shareMessage}
        />
        <Text>{JSON.stringify(result)}</Text>
      </View>
    );
  }
}
