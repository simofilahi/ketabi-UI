import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, StyleSheet} from 'react-native';
import {View} from 'native-base';
import {DrawerItems} from 'react-navigation-drawer';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <View style={{height: 150, backgroundColor: 'green'}}></View>
    <SafeAreaView style={styles.container}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent;
