import React, {Component} from 'react';
import {Container} from 'native-base';
import HomeBody from './HomeBody';
import Myheader from '../Header/Myheader';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{backgroundColor: '#E9EBEE'}}>
        <Myheader navigation={this.props.navigation} />
        <HomeBody />
      </Container>
    );
  }
}

export default HomeScreen;
