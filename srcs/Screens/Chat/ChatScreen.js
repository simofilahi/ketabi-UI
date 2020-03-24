import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Input, Item, Icon, Button, Container} from 'native-base';
import Colors from '../../Colors/Colors';
import ChatHeader from './ChatHeader';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {onTyping, clearField} from '../../Redux/Actions/ChatActions';
import {sokcet} from '../Splash/SplashScreen';

export class ChatScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: () => <ChatHeader navigation={navigation} />,
    };
  };
  componentDidMount() {
    const roomId = '5e7914337c492927c0ac147b';
    sokcet.emit('join', roomId);
    sokcet.on('newMessage', msg => {
      console.log('new msg', msg);
    });
  }
  sendmsg = () => {
    const sender_id = '5e7914337c492927c0ac146b';
    const reciver_id = '5e789df5b67a055b6cce9070';
    const roomId = '5e7914337c492927c0ac147b';
    const message = this.props.Chat.text;
    const data = {
      roomId,
      roomId,
      sender_id,
      reciver_id,
      message,
    };
    sokcet.emit('sendMessage', data);
  };
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={Colors.tomato} />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <View
            style={{
              flex: 1,
            }}></View>
          <View
            style={{
              height: 70,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Item
                rounded
                last
                style={{
                  marginLeft: 10,
                }}>
                <Input
                  placeholder="typing"
                  style={{
                    backgroundColor: Colors.white,
                    borderRadius: 200,
                  }}
                  value={this.props.Chat.text}
                  onChangeText={text => {
                    this.props.dispatch({
                      type: onTyping,
                      text: text,
                    });
                  }}
                />
              </Item>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 55,
                  height: 55,
                  backgroundColor: '#fff',
                  borderRadius: 55,
                }}
                onPress={() => {
                  this.sendmsg();
                  // don't forget here a promise
                  this.props.dispatch({
                    type: clearField,
                    text: '',
                  });
                }}>
                <Icon
                  style={{
                    color: Colors.tomato,
                  }}
                  active
                  type="FontAwesome"
                  name="send"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {Chat} = state;
  return {Chat};
};

export default connect(mapStateToProps)(ChatScreen);
