import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
<<<<<<< HEAD
import { TabNavigator } from 'react-navigation';
import {Feed, Map, Home, Events} from '../components';
=======
import { TabNavigator, TabBarBottom } from 'react-navigation';
import {Feed, Map, Home} from '../components';
>>>>>>> 65757aed9d569ff5609b35ee95428cc05dc3feba

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
<<<<<<< HEAD
  Events:{
    screen: Events,
  }
=======
},
  {
    tabBarOptions:{
      tabBarComponent: TabBarBottom,
      tabBarPosition:'bottom',
       activeTintColor:'red',
       inactiveTintColor:'grey'
    }

>>>>>>> 65757aed9d569ff5609b35ee95428cc05dc3feba
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
