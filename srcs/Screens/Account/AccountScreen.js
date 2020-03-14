import React, {Component} from 'react';
import {
  Container,
  Grid,
  Col,
  Row,
  Content,
  Text,
  Item,
  Input,
  Label,
} from 'native-base';
import {StatusBar} from 'react-native';
import {Avatar} from 'react-native-elements';
import Colors from '../../Colors/Colors';
import {connect} from 'react-redux';
import {EditBoolean} from '../../Redux/Actions/AccountActions';
import AccountHeader from './AccountHeader';

export class AccountScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: () => <AccountHeader navigation={navigation} />,
    };
  };
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={Colors.tomato} />
        <Grid style={{height: '100%'}}>
          <Content>
            <Row
              style={{
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Avatar
                size="xlarge"
                rounded
                icon={{name: 'user', color: 'tomato', type: 'font-awesome'}}
                activeOpacity={0.7}
                showEditButton
                containerStyle={{
                  marginTop: 5,
                  marginBottom: 15,
                }}
              />
            </Row>
            <Row
              style={{
                height: 400,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}>
              <Col
                style={{
                  width: '100%',
                  height: 35,
                  marginLeft: 17,
                }}>
                <Text>Personal information</Text>
              </Col>
              <Col
                style={{
                  width: '100%',
                  height: 80,
                }}>
                <Item stackedLabel style={{marginLeft: 17, marginRight: 17}}>
                  <Label>Username</Label>
                  <Input value="simofilahi" />
                </Item>
              </Col>
              <Col
                style={{
                  width: '100%',
                  height: 80,
                }}>
                <Item stackedLabel style={{marginLeft: 17, marginRight: 17}}>
                  <Label>Password</Label>
                  <Input value="***********" />
                </Item>
              </Col>
              <Col
                style={{
                  width: '100%',
                  height: 80,
                }}>
                <Item stackedLabel style={{marginLeft: 17, marginRight: 17}}>
                  <Label>Email</Label>
                  <Input value="mohamedfilahi222@gmail.com" />
                </Item>
              </Col>
              <Col
                style={{
                  width: '100%',
                  height: 80,
                }}>
                <Item stackedLabel style={{marginLeft: 17, marginRight: 17}}>
                  <Label>Gendar</Label>
                  <Input value="Male" />
                </Item>
              </Col>
            </Row>
          </Content>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {Account} = state;
  return {Account};
};

export default connect(mapStateToProps)(AccountScreen);
