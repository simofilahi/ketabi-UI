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
  FullnameOnChange,
  EmailOnChange,
  PasswordOnChange,
  ShowPass,
} from '../../Redux/Actions/RegisterAction';
import Colors from '../../Colors/Colors';
import MethodAuth from '../Components/Auth/MethodAuth';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <StatusBar hidden /> */}
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
                  const password = text;
                  this.props.dispatch({
                    type: FullnameOnChange,
                    password: password,
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
                  const password = text;
                  this.props.dispatch({
                    type: EmailOnChange,
                    password: password,
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
                  const password = text;
                  this.props.dispatch({
                    type: PasswordOnChange,
                    password: password,
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
