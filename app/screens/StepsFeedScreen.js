import React, { Fragment } from 'react';
import { View, Text, StatusBar } from "react-native";


export default class StepsFeedScreen extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#FF117E');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor="#FF117E" />
        <Text>Here you can see all the small </Text>
        <Text>and big steps of your child </Text>
      </View>
    );
  }
}

