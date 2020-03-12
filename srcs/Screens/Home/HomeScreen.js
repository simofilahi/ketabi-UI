import React, {Component} from 'react';
import {Container, Text} from 'native-base';
import HomeBody from './HomeBody';
import Myheader from '../Header/Myheader';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('yeah mounted');
  }
  render() {
    return (
      <Container>
        <Myheader navigation={this.props.navigation} />
        <HomeBody />
      </Container>
    );
  }
}

export default HomeScreen;
