import React, {Component} from 'react';
import {
  Header,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Right,
  Item,
  Input,
  Text,
} from 'native-base';
import {StatusBar} from 'react-native';

class Myheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: false,
    };
  }
  render() {
    return (
      <Header
        searchBar
        rounded
        androidStatusBarColor="tomato"
        style={{backgroundColor: 'tomato'}}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}

export default Myheader;
