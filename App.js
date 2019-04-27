/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Text, Drawer, Button } from 'native-base';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Home from './screen/Home';
import Setting from './screen/Setting';

/*const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
      headerVisible: false,
      headerStyle: {
        backgroundColor: '#3F51B5',
      },
      headerTintColor: '#FFF',
    })
  },
  SettingScreen: {
    screen: Setting,
    navigationOptions: () => ({
      title: 'Settings'
    })
  }
},
{
  initialRouteName: 'HomeScreen',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

export default createAppContainer(AppNavigator);*/

export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  }
  openDrawer = () => {
    this.drawer._root.open()
  }
  render() {
    return (
      <Drawer ref={(ref) => {
        this.drawer = ref;
      }} content={
        <Home navigator={this.navigator}></Home>
      }
        onClose={() => this.closeDrawer()}>
        <Setting openDrawer={this.openDrawer.bind(this)}></Setting>
      </Drawer>
    );
  }
}