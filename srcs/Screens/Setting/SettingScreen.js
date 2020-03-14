import React, {Component} from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Icon} from 'native-base';
import Colors from '../../Colors/Colors';
import Ripple from 'react-native-material-ripple';

const list = [
  {
    title: 'Account',
    icon: () => <Icon name="user-circle" type="FontAwesome5"></Icon>,
    screen: 'Account',
  },
  {
    title: 'Help',
    icon: () => <Icon name="question-circle" type="FontAwesome5"></Icon>,
    screen: 'Help',
  },
  {
    title: 'About',
    icon: () => <Icon name="info-circle" type="FontAwesome5"></Icon>,
    screen: 'About',
  },
  {
    title: 'Log out',
    icon: () => <Icon name="sign-out" type="Octicons"></Icon>,
  },
];

class SettingScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.tomato,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View>
        {list.map((item, i) => {
          if (item.title === 'Log out') {
            return (
              <Ripple
                onPress={() => {
                  // this.props.navigation.navigate(item.screen);
                }}>
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon}}
                  bottomDivider
                />
              </Ripple>
            );
          } else {
            return (
              <Ripple
                onPress={() => {
                  this.props.navigation.navigate(item.screen);
                }}>
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={item.icon}
                  bottomDivider
                  chevron
                />
              </Ripple>
            );
          }
        })}
      </View>
    );
  }
}

export default SettingScreen;
