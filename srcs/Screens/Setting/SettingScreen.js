import React, {Component} from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Icon} from 'native-base';
import Colors from '../../Colors/Colors';

const list = [
  {
    title: 'Account',
    icon: () => <Icon name="user-circle" type="FontAwesome5"></Icon>,
  },
  {
    title: 'Help',
    icon: () => <Icon name="question-circle" type="FontAwesome5"></Icon>,
  },
  {
    title: 'About',
    icon: () => <Icon name="info-circle" type="FontAwesome5"></Icon>,
  },
  {
    title: 'Log out',
    icon: () => <Icon name="log-out-outline" type="Ionicons"></Icon>,
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
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                bottomDivider
              />
            );
          } else {
            return (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={item.icon}
                bottomDivider
                chevron
              />
            );
          }
        })}
      </View>
    );
  }
}

export default SettingScreen;
