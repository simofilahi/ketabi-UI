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
    const {searchBar} = this.state;
    if (searchBar === false) {
      return (
        <Header transparent>
          <StatusBar backgroundColor="#E9EBEE" />
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.openDrawer();
                console.log('props', this.props.navigation);
              }}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Wow</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.setState({
                  searchBar: true,
                });
              }}>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
      );
    } else if (searchBar === true) {
      return (
        <Header searchBar rounded transparent>
          <StatusBar backgroundColor="#E9EBEE" />
          <Item>
            <Button
              transparent
              onPress={() => {
                this.setState({
                  searchBar: false,
                });
              }}>
              <Icon name="arrow-back" />
            </Button>
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
    } else return null;
  }
}

export default Myheader;
