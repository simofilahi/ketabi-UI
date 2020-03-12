import React, {Component} from 'react';
import {View, Text, Button, Icon} from 'native-base';

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
          <Button transparent>
            <Icon name="more" style={{color: Colors.white}} />
          </Button>
        </View>
      </View>
    );
  }
}

export default ProfileHeader;
