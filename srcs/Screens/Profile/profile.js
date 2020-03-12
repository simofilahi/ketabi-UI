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
  Header,
  ScrollableTab,
  TabHeading,
  Icon,
} from 'native-base';
import {Avatar, ListItem} from 'react-native-elements';
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

export class Profile extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col
                style={{
                  height: 300,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.tomato,
                }}
                size={12}>
                <Avatar
                  size="xlarge"
                  rounded
                  icon={{name: 'user', color: 'tomato', type: 'font-awesome'}}
                  overlayContainerStyle={{backgroundColor: 'white'}}
                  activeOpacity={0.7}
                  showEditButton
                />
                <Text
                  style={{
                    fontSize: 24,
                    margin: 20,
                    color: Colors.white,
                  }}>
                  Mohamed filahi
                </Text>
                <Row
                  style={{
                    height: 50,
                  }}>
                  <Col
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    size={4}
                    // backgroundColor="blue"
                  >
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
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    size={4}
                    // backgroundColor="yellow"
                  >
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      200
                    </Text>
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      Followers
                    </Text>
                  </Col>
                  <Col
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    size={4}
                    // backgroundColor="blue"
                  >
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      50
                    </Text>
                    <Text
                      style={{
                        color: Colors.white,
                      }}>
                      Following
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Tabs
              renderTabBar={() => (
                <ScrollableTab style={{backgroundColor: Colors.tomato}} />
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
            {/* <Row>
              <Col size={12}>
                {list.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{name: item.icon}}
                    bottomDivider
                    chevron
                  />
                ))}
              </Col>
            </Row> */}
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Profile;
