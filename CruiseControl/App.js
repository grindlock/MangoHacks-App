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
import { TabNavigator, TabBarBottom} from 'react-navigation';
import Tabs from './navigation/Navbar.js';


class App extends Component {
  constructor(props){
    super(props);
    state={headerTitle:null}
  }
  render() {
    return (
      <View style={{flex:1}}>

        <Tabs/>
    </View>
    );
  }
};

export default App;
