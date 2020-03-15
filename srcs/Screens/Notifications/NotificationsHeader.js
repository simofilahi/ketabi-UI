import React, {Component} from 'react';
import {View, Text, Button, Icon} from 'native-base';
import {SearchBar} from 'react-native-elements';
import {SearchBoolean} from '../../Redux/Actions/HomeAction';
import {connect} from 'react-redux';
import Ripple from 'react-native-material-ripple';

class NotificationsHeader extends Component {
  render() {
    console.log('HOME ==> ', this.props.Home);
    const {search} = this.props.Home;
    return (
      <View
        style={{
          backgroundColor: Colors.tomato,
          flexDirection: 'row',
          height: 60,
          width: '100%',
        }}>
        {search ? (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SearchBar
              onCancel={() => {
                this.props.dispatch({
                  type: SearchBoolean,
                  boolean: false,
                });
              }}
              onChangeText={() => console.log('yes')}
              platform={'android'}
              placeholder="Search"
              clearIcon={false}
              containerStyle={{
                width: '95%',
                marginTop: 15,
                marginBottom: 15,
                justifyContent: 'center',
                borderRadius: 100,
              }}
            />
          </View>
        ) : (
          <>
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
                {this.props.title}
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
                rippleContainerBorderRadius={100}
                rippleCentered={true}
                rippleFades={false}
                onPress={() => {
                  setTimeout(() => {
                    this.props.dispatch({
                      type: SearchBoolean,
                      boolean: true,
                    });
                  }, 300);
                }}>
                <Button transparent>
                  <Icon name="search" style={{color: Colors.white}} />
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
          </>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {Home} = state;
  return {Home};
};

export default connect(mapStateToProps)(NotificationsHeader);
