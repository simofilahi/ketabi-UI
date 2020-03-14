import React, {Component} from 'react';
import {View, Text, Button, Icon, Grid, Col} from 'native-base';
import Colors from '../../Colors/Colors';
import Ripple from 'react-native-material-ripple';
import {connect} from 'react-redux';

export class AccountHeader extends Component {
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
            height: '100%',
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ripple
            rippleContainerBorderRadius={100}
            rippleCentered={true}
            rippleFades={false}
            onPress={() => {
              console.log(this.props.navigation);
              this.props.navigation.goBack();
            }}>
            <Button transparent>
              <Icon
                name="times-circle"
                type="FontAwesome5"
                style={{color: Colors.white, fontSize: 22}}
              />
            </Button>
          </Ripple>
        </View>
        <View
          style={{
            height: '100%',
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              width: 200,
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.white,
              }}>
              Edit profile
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ripple
              rippleContainerBorderRadius={200}
              rippleCentered={true}
              rippleFades={false}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Button transparent>
                <Icon
                  name="check"
                  type="FontAwesome"
                  style={{color: Colors.white}}
                />
              </Button>
            </Ripple>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {Account} = state;
  return {Account};
};

export default connect(mapStateToProps)(AccountHeader);
