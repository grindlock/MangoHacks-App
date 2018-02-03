/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import { TabNavigator, TabBarBottom} from 'react-navigation';
import Tabs from './navigation/Navbar.js';
import { Header } from './components';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <Tabs/>
    </View>
    );
  }
};

export default App;
