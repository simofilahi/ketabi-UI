import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AsyncStorage} from 'react-native';
import io from 'socket.io-client';

let sokcet = io('http://192.168.1.6:1337');

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 1000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'red',
          alignContent: 'center',
          flexDirection: 'column',
        }}>
        <View
          style={{
            height: 50,
            width: 'auto',
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text> ketabi </Text>
        </View>
      </View>
    );
  }
}

export {SplashScreen, sokcet};
