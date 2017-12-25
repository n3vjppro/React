import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, RefreshControl, TextInput, TouchableOpacity,StatusBar

} from 'react-native';
import { Provider } from 'react-redux';
import App from './ChangeComponent';
import store from './Change';

export default class Root extends Component {
    componentWillMount(){
        StatusBar.setHidden(true);
    }
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}