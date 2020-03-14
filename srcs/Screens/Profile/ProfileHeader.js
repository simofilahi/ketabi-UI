import React, {Component} from 'react';
import {View, Text, Button, Icon} from 'native-base';
import Ripple from 'react-native-material-ripple';

class ProfileHeader extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.tomato,
          flexDirection: 'row',
          height: 60,
          width: '100%',
        }}>
        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.white,
              marginLeft: 20,
            }}>
            Profile
          </Text>
        </View>
        <View
          style={{
            width: '60%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Ripple
            rippleContainerBorderRadius={200}
            rippleCentered={true}
            rippleFades={false}
            onPress={() => {
              setTimeout(() => {
                this.props.navigation.navigate('Settings');
              }, 300);
            }}>
            <Button
              transparent
              onPress={() => {
                console.log(this.props);
                this.props.navigation.navigate('Settings');
              }}>
              <Icon
                name="sliders-h"
                type="FontAwesome5"
                style={{color: Colors.white}}
              />
            </Button>
          </Ripple>
          <Ripple
            rippleContainerBorderRadius={100}
            rippleCentered={true}
            rippleFades={false}>
            <Button transparent>
              <Icon name="more" style={{color: Colors.white}} />
            </Button>
          </Ripple>
        </View>
      </View>
    );
  }
}

export default ProfileHeader;
