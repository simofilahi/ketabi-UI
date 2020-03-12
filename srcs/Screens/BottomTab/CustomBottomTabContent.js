import React from 'react';
import {Icon} from 'native-base';

const CustomBottomTabContent = props => {
  const {navigation, focused, horizontal, tintColor} = this.props;
  const {routeName} = navigation.state;
  let iconName;
  let type;
  console.log(focused);
  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home';
    type = 'Ionicons';
  } else if (routeName === 'Conversation') {
    iconName = focused ? 'chatbox-outline' : 'chatbox';
    type = 'Ionicons';
  } else if (routeName === 'Notifications') {
    iconName = focused ? 'chatbox' : 'chatbox';
    type = 'Ionicons';
  } else if (routeName === 'Profile') {
    iconName = focused ? 'user' : 'user';
    type = 'FontAwesome';
  }

  // You can return any component that you like here!
  return (
    <Icon
      type={type}
      name={iconName}
      style={{
        color: tintColor,
        fontSize: 35,
      }}
    />
  );
};

export default CustomBottomTabContent;
