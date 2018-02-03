import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import {Feed, Map, Home} from '../components';

const Tabs = TabNavigator({

  Home:{
    screen:Home,
    header:{
      title:"Home",
    }
  },
  Feed: {
    screen: Feed,
  },
  Map: {
    screen: Map,
  },
},
  {

      tabBarComponent: TabBarBottom,
      tabBarPosition:'bottom',
       activeTintColor:'red',
       inactiveTintColor:'grey'
    

});

export default Tabs;
/*

export const Navbar = TabNavigator({
  Feed: { screen: Feed,
    navigationOptions: {
        tabBarLabel: 'Feed',
      }
     },
  Map: { screen: Map,
    navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
  },
  {
    lazyLoad:true,
    tabBarposition:'bottom',

  },{
    initialRouteName:'Feed',
    tabBarposition:'bottom',
  }
);
*/
