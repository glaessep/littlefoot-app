import React, { Fragment } from 'react';
import { View, Text, StatusBar } from "react-native";


export default class HomeScreen extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      //isAndroid && StatusBar.setBackgroundColor('#e83e8c');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor="#e83e8c" />
        <Text>Home!</Text>
      </View>
    );
  }
}

