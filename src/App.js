/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    Vibration,
    Share,
    SafeAreaView
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./Styles";
import CustomButton from "./Button";

const INCREMENT = 1;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, result: "" };
        this.onResetPress = this.onResetPress.bind(this);
        this.onAddPress = this.onAddPress.bind(this);
        this.onSubstractPress = this.onSubstractPress.bind(this);
        this._shareMessage = this._shareMessage.bind(this);
        this._showResult = this._showResult.bind(this);
    }

    startVibration() {
        Vibration.vibrate();
    }

    _showResult(result) {
        this.setState({ result });
    }

    _shareMessage() {
        Share.share({ message: "My score! " }).then(this._showResult);
    }

    componentDidMount() {
        this.getData();
    }

    onResetPress() {
        this.setState({ counter: 0 });
        this.startVibration();
    }

    onAddPress() {
        const counter = this.state.counter + INCREMENT;

        this.setState({ counter });
        AsyncStorage.setItem("number", this.state.counter + INCREMENT);
        this.startVibration();
    }

    onSubstractPress() {
        const counter = this.state.counter - INCREMENT;

        this.setState({ counter });
        AsyncStorage.setItem("number", counter);
        this.startVibration();
    }

    async getData() {
        try {
            const value = await AsyncStorage.getItem("number");
            if (value !== null) {
                this.setState({ counter: value });
            }
        } catch (e) { }
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.counter}>{this.state.counter}</Text>

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
                    onPress={this._shareMessage}
                />

                <Text>{JSON.stringify(this.state.result)}</Text>
            </View>
        );
    }
}
