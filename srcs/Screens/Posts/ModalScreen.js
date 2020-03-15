import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ModalHeader from './ModalHeader';
import Colors from '../../Colors/Colors';

class ModalScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: () => <ModalHeader navigation={navigation} />,
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.item2}>
          <Text style={styles.text}>Item 2</Text>
        </View>
        <View style={styles.item3}>
          <Text style={styles.text}>Item 3</Text>
        </View>
        <View style={styles.item4}>
          <Text style={styles.text}>Item 4</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  item1: {
    flex: 1,
    backgroundColor: '#feffcb',
  },
  item2: {
    flex: 1,
    backgroundColor: '#c6394d',
  },
  item3: {
    flex: 1,
    backgroundColor: '#49beb7',
  },
  item4: {
    flex: 1,
    backgroundColor: '#240041',
  },
});

export default ModalScreen;
