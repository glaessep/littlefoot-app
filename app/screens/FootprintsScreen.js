import React, { Fragment } from 'react';
import { View, Text, StatusBar, Button, Image } from "react-native";


export default class FootprintsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Footprints',
      headerRight: (
        <View>
          <Button
            onPress={() => navigation.navigate('Gallery')}
            title="(+)"
            color="#fff"
          />
        </View>
      ),

    };
  };

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#D9831F');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor="#D9831F" />
        <Text>Here you can see all the small </Text>
        <Text>and big steps of your child </Text>
      </View>
    );
  }
}

