import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Icon} from 'native-base';
import Ripple from 'react-native-material-ripple';
import Colors from '../../Colors/Colors';

export class ChatHeader extends Component {
  render() {
    return (
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: Colors.tomato,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ripple
            rippleContainerBorderRadius={100}
            rippleCentered={true}
            rippleFades={false}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Button transparent style={{borderRadius: 200}}>
              <Icon
                name="arrow-back"
                style={{color: Colors.white, fontSize: 22}}
              />
            </Button>
          </Ripple>
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
          }}>
          <Text>Mohamed</Text>
        </View>
      </View>
    );
  }
}

export default ChatHeader;
