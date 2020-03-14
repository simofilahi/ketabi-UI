import React, {Component} from 'react';
import {
  Button,
  Card,
  Text,
  Content,
  Right,
  Icon,
  CardItem,
  Left,
  Body,
} from 'native-base';
import {Image} from 'react-native';
import axios from 'axios';
import Colors from '../../Colors/Colors';
import Post from './Post';
import {rooturl, key} from '../../../config';
import Ripple from 'react-native-material-ripple';

class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
    };
  }
  componentDidMount() {
    const url = `${rooturl}/photos/?client_id=${key}`;
    axios
      .get(url)
      .then(res => {
        res.data.map(elem => {
          console.log('\n');
          console.log('elem => ', elem);
          console.log('\n');
        });
        this.setState({
          photos: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const {photos} = this.state;
    return (
      <>
        <Post />
        <Content style={{backgroundColor: Colors.white}}>
          {photos !== null &&
            photos.map((elem, index) => {
              return (
                <Card>
                  <Ripple>
                    <CardItem>
                      <Left>
                        <Body>
                          <Text></Text>
                          {/* <Text note>GeekyAnts</Text> */}
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={{uri: elem.urls.small}}
                        style={{height: 200, width: null, flex: 1}}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent>
                          <Icon active name="thumbs-up" />
                          <Text>{elem.likes}</Text>
                        </Button>
                      </Left>
                      <Body>
                        <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>4 Comments</Text>
                        </Button>
                      </Body>
                      <Right>
                        <Text>11h ago</Text>
                      </Right>
                    </CardItem>
                  </Ripple>
                </Card>
              );
            })}
        </Content>
      </>
    );
  }
}

export default HomeBody;
