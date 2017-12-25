import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, RefreshControl, TextInput, StatusBar
} from 'react-native';  

export default class AddComponent extends Component {
    componentWillMount(){
        StatusBar.setHidden(true);
    }
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'pink',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 64
            }}>
                <TextInput style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'white',
                    borderWidth: 1,
                    color: 'white'
                }}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: text });
                        }
                    }
                >
                </TextInput>
                <TouchableHighlight style={{
                    marginRight: 10
                }}
                    underlayColor="blue"
                    onPress={
                        (event) => {
                            if (!this.state.newTaskName.trim()) {
                                return;
                            }
                            this.props.onClickAdd(this.state.newTaskName);
                        }
                    }
                >
                    <Text>ADD</Text>

                </TouchableHighlight>

            </View>
        );
    }
}