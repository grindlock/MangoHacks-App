import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './Header';

class Events extends Component{
  render(){
    return(
      <View><Header headerTitle="Events"/></View>
    );
  }
}

export {Events};
