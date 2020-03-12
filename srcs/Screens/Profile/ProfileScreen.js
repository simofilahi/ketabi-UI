import React, {Component} from 'react';
import {
  Container,
  Grid,
  Col,
  Content,
  Row,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Icon,
} from 'native-base';
import {Avatar} from 'react-native-elements';
import ProfileHeader from './ProfileHeader';
import Colors from '../../Colors/Colors';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

export class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: () => <ProfileHeader navigation={navigation} />,
    };
  };
  render() {
    return (
      <Container>
        <Content>
          <Grid style={{height: 250}}>
            <Row
              style={{
                height: '80%',
                backgroundColor: Colors.tomato,
              }}>
              <Col
                style={{
                  height: '80%',
                  width: '50%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Avatar
                  size="xlarge"
                  rounded
                  icon={{name: 'user', color: 'tomato', type: 'font-awesome'}}
                  overlayContainerStyle={{backgroundColor: Colors.white}}
                  activeOpacity={0.7}
                  showEditButton
                  containerStyle={{
                    marginTop: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 8,
                    color: Colors.white,
                  }}>
                  Mohamed filahi
                </Text>
              </Col>
              <Col
                style={{
                  height: '80%',
                  width: '50%',
                }}>
                <Row
                  style={{
                    height: '100%',
                    width: '100%',
                  }}>
                  <Col
                    style={{
                      width: '50%',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      100
                    </Text>
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      Posts
                    </Text>
                  </Col>
                  <Col
                    style={{
                      width: '50%',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      20
                    </Text>
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      Exchange
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                height: '20%',
                width: '100%',
              }}>
              <Tabs
                renderTabBar={() => (
                  <ScrollableTab
                    style={{
                      backgroundColor: Colors.tomato,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                )}>
                <Tab
                  heading={
                    <TabHeading style={{backgroundColor: Colors.tomato}}>
                      <Icon name="journal" style={{color: Colors.white}} />
                      <Text style={{color: Colors.white}}>journal</Text>
                    </TabHeading>
                  }></Tab>
                <Tab
                  heading={
                    <TabHeading style={{backgroundColor: Colors.tomato}}>
                      <Icon name="add" style={{color: Colors.white}} />
                      <Text style={{color: Colors.white}}>add</Text>
                    </TabHeading>
                  }></Tab>
              </Tabs>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;
