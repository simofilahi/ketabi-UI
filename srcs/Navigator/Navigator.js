import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import SettingScreen from '../Screens/Setting/SettingScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import RegisterScreen from '../Screens/Register/RegisterScreen';
import ForgetPassword from '../Screens/ForgetPass/ForgetPassword';
import Profile from '../Screens/Profile/Profile';
import Conversation from '../Screens/Profile/Profile';
import Notifications from '../Screens/Notifications/Notifications';

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Conversation: {
      screen: Conversation,
    },
    Notifications: {
      screen: Notifications,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        let type;
        if (routeName === 'Home') {
          iconName = focused ? 'home' : 'home';
          type = 'FontAwesome';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Conversation') {
          iconName = focused ? 'comment' : 'comment';
          type = 'FontAwesome';
        } else if (routeName === 'Notifications') {
          iconName = focused ? 'bell' : 'bell';
          type = 'FontAwesome';
        } else if (routeName === 'Profile') {
          iconName = focused ? 'user' : 'user';
          type = 'FontAwesome';
        }

        // You can return any component that you like here!
        return (
          <Icon
            type={type}
            name={iconName}
            style={{color: tintColor, fontSize: 30}}
            fontSize={40}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      },
    },
    Forget: {
      screen: ForgetPassword,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppMain = createSwitchNavigator(
  {
    auth: AuthStack,
    app: AppTabNavigator,
  },
  {
    initialRouteName: 'app',
  },
);

export default createAppContainer(AppMain);
