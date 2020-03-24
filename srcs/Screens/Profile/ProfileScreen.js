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
  Fab,
  Button,
  ListItem,
} from 'native-base';
import {connect} from 'react-redux';
import {FabOnchange, ProfileInfo} from '../../Redux/Actions/ProfileActions';
import {Avatar} from 'react-native-elements';
import ProfileHeader from './ProfileHeader';
import Colors from '../../Colors/Colors';
import {apiurl} from '../../../config';
import axios from 'axios';

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

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
  componentDidMount() {
    console.log(this.props.navigation);
    const {uuid} = this.props.Profile;

    const url = apiurl + `/profile/${uuid}`;
    console.log({url: url});
    axios
      .get(url)
      .then(res => {
        console.log('res ==> ', res.data);
        this.props.dispatch({
          type: ProfileInfo,
          fullname: res.data.data.username,
        });
      })
      .catch(err => {
        console.log({err: err});
      });
  }
  render() {
    console.log({props: this.props.Profile});
    return (
      <Container>
        <Content>
          <Grid style={{height: 180}}>
            <Row
              style={{
                height: '80%',
                backgroundColor: Colors.tomato,
              }}>
              <Col
                style={{
                  height: '80%',
                  width: '40%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Avatar
                  size="large"
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
                  {this.props.Profile.fullname}
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
          </Grid>
          {list2.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.avatar_url}}}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
              badge={{
                color: Colors.tomato,
                value: 3,
                textStyle: {color: Colors.gray},
                // containerStyle: {},
              }}
            />
          ))}
        </Content>
        <Fab
          active={this.props.Profile.active}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: Colors.tomato}}
          position="bottomRight"
          onPress={() => {
            this.props.navigation.navigate('MyModal');
            this.props.dispatch({
              type: FabOnchange,
            });
          }}>
          <Icon name="md-add" type="Ionicons" />
        </Fab>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {Profile} = state;
  return {Profile};
};

export default connect(mapStateToProps)(ProfileScreen);
