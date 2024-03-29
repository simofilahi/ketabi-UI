import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import SettingScreen from '../Screens/Setting/SettingScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import RegisterScreen from '../Screens/Register/RegisterScreen';
import ForgetPassword from '../Screens/ForgetPass/ForgetPassword';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import ConversationScreen from '../Screens/Conversation/ConversationScreen';
import NotificationsScreen from '../Screens/Notifications/NotificationsScreen';
import AboutScreen from '../Screens/About/AboutScreen';
import HelpScreen from '../Screens/Help/HelpScreen';
import AcountScreen from '../Screens/Account/AccountScreen';
import ModalScreen from '../Screens/Posts/ModalScreen';
import ChatScreen from '../Screens/Chat/ChatScreen';
import {SplashScreen} from '../Screens/Splash/SplashScreen';
import {Icon} from 'native-base';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const ConversationStack = createStackNavigator(
  {
    Conversation: ConversationScreen,
    Chat: ChatScreen,
  },
  // {
  //   initialRouteName: 'Chat',
  // },
);

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Settings: SettingScreen,
  About: AboutScreen,
  Help: HelpScreen,
  Account: AcountScreen,
  MyModal: ModalScreen,
});

const NotificationsStack = createStackNavigator({
  Notifications: NotificationsScreen,
});

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Conversation: ConversationStack,
    Notifications: NotificationsStack,
    Profile: ProfileStack,
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

const SettingStack = createStackNavigator({
  Setting: SettingScreen,
});

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Forget: {
      screen: ForgetPassword,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppMain = createSwitchNavigator(
  {
    splach: SplashScreen,
    auth: AuthStack,
    app: AppTabNavigator,
    //
    // Chat: ConversationStack,
  },
  {
    initialRouteName: 'app',
  },
);

export default createAppContainer(AppMain);
