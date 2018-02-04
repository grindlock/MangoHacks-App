import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { Header } from './Header';

const fakeData = require('./Allevents.json')
class Home extends Component{
  state={list: ''}

  myList(){

      return fakeData.map((data, key) =>
      <View key={key} style={{flex:1,
        backgroundColor:'white', padding: 20,
        marginTop:10, marginRight:30, marginBottom:5,
        marginLeft:30, overflow:'hidden', borderRadius: 20,
        shadowOffset:{width: 10, height:10}, shadowColor:'black',
        shadowOpacity: 0.9, shadowRadius:1, elevation: 1,
        borderColor:'grey', borderWidth:0.5,
        }}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:20,}}>{data.title}</Text>
        <View style={{flex:1, justifyContent:'center', borderTopWidth:0.4, }}>
          <Text>{'Date: '+data.date}</Text>
          <Text>{'Time: '+data.time}</Text>
          <Text>{'Location: '+data.location}</Text>
          <Text>{'Description: '+data.description}</Text>
        </View>
      </View>
    );

  }


  render(){
    return(
      <View style={{flex:1, padding:3, backgroundColor:'lightgrey'}}>
        <Header headerTitle="My Home"/>
      <ScrollView>
        {this.myList()}
        </ScrollView>
    </View>
    );
  }
}

export {Home};
