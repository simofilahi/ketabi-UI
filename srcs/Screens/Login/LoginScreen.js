import React, {Component} from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Form,
  Input,
  Item,
  Button,
  Text,
  Icon,
} from 'native-base';
import {
  EmailOnChange,
  PasswordOnChange,
  ShowPass,
} from '../../Redux/Actions/LoginAction';
import {StoreUuid} from '../../Redux/Actions/ProfileActions';
import Colors from '../../Colors/Colors';
import MethodAuth from '../Components/Auth/MethodAuth';
import {AsyncStorage} from 'react-native';
import {apiurl} from '../../../config';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  login = () => {
    const {email, password} = this.props.Login;
    const url = `${apiurl}auth/login`;
    axios
      .post(url, {
        email,
        password,
      })
      .then(async res => {
        console.log({res: res.data});
        this.props.dispatch({
          type: StoreUuid,
          uuid: res.data.uuid,
        });
        await AsyncStorage.setItem('token', res.data.token);
        this.props.navigation.navigate('Home');
      })
      .catch(err => {
        console.log({err: err});
      });
  };
  render() {
    return (
      <Container
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor={Colors.tomato} />
        <Content>
          <Icon
            style={{
              alignSelf: 'center',
              color: Colors.gray,
              fontSize: 60,
              marginBottom: 40,
            }}
            type="FontAwesome5"
            name="book-reader"
          />
          <Text
            style={{
              fontSize: 32,
              fontStyle: 'normal',
              alignSelf: 'center',
            }}>
            Sign in to Ketaby
          </Text>
          <Form
            style={{
              marginTop: 40,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 30,
            }}>
            <Item
              rounded
              last
              style={{
                marginBottom: 10,
              }}>
              <Icon
                style={{
                  color: Colors.gray,
                }}
                type="FontAwesome"
                name="user"
              />
              <Input
                placeholder="Username"
                onChangeText={text => {
                  this.props.dispatch({
                    type: EmailOnChange,
                    email: text,
                  });
                }}
              />
            </Item>
            <Item rounded last>
              <Icon
                style={{
                  color: Colors.gray,
                }}
                type="FontAwesome"
                name="key"
              />
              <Input
                secureTextEntry={this.props.Login.showpass ? false : true}
                placeholder="Password"
                onChangeText={text => {
                  const password = text;
                  this.props.dispatch({
                    type: PasswordOnChange,
                    password: password,
                  });
                }}
              />
              <Icon
                style={{
                  marginRight: 10,
                  color: Colors.gray,
                }}
                active={true}
                type="FontAwesome"
                name={this.props.Login.showpass ? 'eye' : 'eye-slash'}
                onPress={() => {
                  this.props.dispatch({
                    type: ShowPass,
                  });
                }}
              />
            </Item>
            <Text
              style={{
                marginTop: 5,
                marginRight: 10,
                alignSelf: 'flex-end',
                color: '#879BAD',
              }}
              onPress={() => {
                this.props.navigation.navigate('Forget');
              }}>
              Forgot password?
            </Text>
          </Form>
          <Button
            primary
            rounded
            style={{
              marginBottom: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              width: '60%',
              backgroundColor: Colors.tomato,
            }}
            onPress={() => {
              this.login();
            }}>
            <Text style={{alignSelf: 'center'}}>Login</Text>
          </Button>
          <Text
            style={{
              alignSelf: 'center',
              color: '#879BAD',
            }}>
            Don't have an account,{' '}
            <Text
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}
              style={{
                color: Colors.brandPrimary,
              }}>
              Sign up
            </Text>
          </Text>
          <MethodAuth />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {Login} = state;
  return {Login};
};

export default connect(mapStateToProps)(LoginScreen);
