import React, {Component} from 'react';
import {Row, Col, Text, Input} from 'native-base';
import {Avatar} from 'react-native-elements';
import Colors from '../../Colors/Colors';

export class Post extends Component {
  render() {
    return (
      <>
        <Row
          style={{
            height: 55,
            marginTop: 5,
            marginBottom: 5,
            borderColor: Colors.Gallery,
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <Col
            size={2}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 1,
              marginTop: 1,
            }}>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'user', color: 'tomato', type: 'font-awesome'}}
              overlayContainerStyle={{backgroundColor: 'white'}}
              activeOpacity={0.7}
            />
          </Col>
          <Col
            size={10}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 6,
              marginTop: 3,
            }}>
            <Input
              style={{
                borderColor: Colors.Gallery,
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 100,
                width: '95%',
              }}
              placeholder="   Typing"
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Post;
