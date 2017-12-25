import React, { Component } from 'react';
import { 
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, RefreshControl, TextInput, TouchableOpacity

 } from 'react-native';
 import AddContainer from '../containers/AddContainer';
 import TaskListContainer from '../containers/TaskListContainer';

 export default class TaskManagerComponent extends Component {
     state = {  }
     render() {
         return (
             <View style={{
                flex:1,
                

             }}>
            <AddContainer />
            <TaskListContainer />

             </View>
         );
     }
 }