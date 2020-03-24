import React, {Component} from 'react';
import {Dimensions, StatusBar} from 'react-native';
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
import {connect} from 'react-redux';
import {
  CreateAccount,
  FullnameOnChange,
  EmailOnChange,
  PasswordOnChange,
  ShowPass,
} from '../../Redux/Actions/RegisterAction';
import Colors from '../../Colors/Colors';
import MethodAuth from '../Components/Auth/MethodAuth';
import axios from 'axios';
import {apiurl} from '../../../config';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  }

  registre = () => {
    // console.log('props ==> ', this.props.Register);
    const {email, password} = this.props.Register;
    // console.log({email: email, password: password});
    // if (email.lentgh > 0 && password.lentgh > 0) {
    // console.log('inside condition', apiurl);
    const url = `${apiurl}auth/signup`;
    // console.log(url);
    axios
      .post(url, {
        username: 'simo',
        email: 'mohamed222222@gmail.com',
        password: '1234',
      })
      .then(res => {
        // console.log({res: res});
      })
      .catch(err => {
        // console.log({err: err});
      });
    // } else {
    // }
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
            active
            type="FontAwesome5"
            name="book-reader"
          />
          <Text
            style={{
              fontSize: 32,
              fontStyle: 'normal',
              alignSelf: 'center',
            }}>
            Create your account
          </Text>
          <Form
            style={{
              marginTop: 15,
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
                active
                type="FontAwesome"
                name="user"
              />
              <Input
                placeholder="Username"
                onChangeText={text => {
                  this.props.dispatch({
                    type: FullnameOnChange,
                    username: text,
                  });
                }}
              />
            </Item>
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
                active
                type="FontAwesome"
                name="envelope-square"
              />
              <Input
                placeholder="Email"
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
                active
                type="FontAwesome"
                name="key"
              />
              <Input
                secureTextEntry={this.props.Register.showpass ? false : true}
                placeholder="Password"
                onChangeText={text => {
                  this.props.dispatch({
                    type: PasswordOnChange,
                    password: text,
                  });
                }}
              />
              <Icon
                onPress={() => {
                  this.props.dispatch({
                    type: ShowPass,
                  });
                }}
                style={{
                  marginRight: 10,
                  color: Colors.gray,
                }}
                active
                type="FontAwesome"
                name={this.props.Register.showpass ? 'eye' : 'eye-slash'}
              />
            </Item>
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
              this.props.navigation.navigate('Home');
              // this.registre();
            }}>
            <Text style={{alignSelf: 'center'}}>Register</Text>
          </Button>
          <Text
            style={{
              alignSelf: 'center',
              color: Colors.gray,
            }}>
            Alerday have an account,{' '}
            <Text
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}
              style={{
                color: Colors.brandPrimary,
              }}>
              Sign in
            </Text>
          </Text>
          <MethodAuth />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {Register} = state;
  return {Register};
};

export default connect(mapStateToProps)(RegisterScreen);
