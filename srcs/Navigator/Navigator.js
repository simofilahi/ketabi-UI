import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import SettingScreen from '../Screens/Setting/SettingScreen';
import CustomDrawerContentComponent from '../Screens/Drawer/DrawerHeader';
import LoginScreen from '../Screens/Login/LoginScreen';
import RegisterScreen from '../Screens/Register/RegisterScreen';
import ForgetPassword from '../Screens/ForgetPass/ForgetPassword';

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  },
  {
    contentComponent: CustomDrawerContentComponent,
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
    }
  },
  {
    initialRouteName: 'Login',
  },
);

const AppMain = createSwitchNavigator(
  {
    app: AppDrawerNavigator,
    auth: AuthStack,
  },
  {
    initialRouteName: 'auth',
  },
);

export default createAppContainer(AppMain);
