import React, { Fragment } from 'react';
import { View, Text, StatusBar } from "react-native";


export default class FriendsScreen extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Friends!</Text>
      </View>
    );
  }
}

