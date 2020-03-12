import React, {Component} from 'react';
import {Container} from 'native-base';
import HomeBody from './HomeBody';
import {StatusBar} from 'react-native';
import {Dimensions} from 'react-native';
import HomeHeader from './HomeHeader';
import Colors from '../../Colors/Colors';
const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

class HomeScreen extends Component {
  static navigationOptions = {
    header: () => <HomeHeader title={'Ketabi'} />,
  };
  componentDidMount() {
    console.log('yeah mounted');
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={Colors.tomato} />
        <HomeBody />
      </Container>
    );
  }
}

export default HomeScreen;
