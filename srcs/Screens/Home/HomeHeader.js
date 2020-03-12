import React, {Component} from 'react';
import {View, Text, Button, Icon} from 'native-base';
import {SearchBar} from 'react-native-elements';
import {SearchBoolean} from '../../Redux/Actions/HomeAction';
import {connect} from 'react-redux';

class HomeHeader extends Component {
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
              containerStyle={{
                width: '85%',
                marginTop: 15,
                marginBottom: 15,
                justifyContent: 'center',
                borderRadius: 100,
              }}
            />
          </View>
        ) : (
          <>
            {this.props.title === 'Ketabi' ? (
              <View
                style={{
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: Colors.white,
                    marginLeft: 20,
                  }}>
                  {this.props.title}
                </Text>
              </View>
            ) : (
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
            )}
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
                  this.props.dispatch({
                    type: SearchBoolean,
                    boolean: true,
                  });
                }}>
                <Icon name="search" style={{color: Colors.white}} />
              </Button>
              <Button transparent>
                <Icon name="more" style={{color: Colors.white}} />
              </Button>
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

export default connect(mapStateToProps)(HomeHeader);
