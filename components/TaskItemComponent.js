import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, RefreshControl, TextInput, TouchableOpacity

} from 'react-native';
import { connect } from 'react-redux';
export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={
                        () => this.props.dispatch({ type: 'TOGGLE_ONE_TASK', taskId: this.props.taskId })}
                >
                    <Text style={{
                        margin: 20,
                        //color:'#00e640'
                        color: this.props.completed ? 'black' : 'blue'
                    }}>{this.props.taskName}
                    </Text>
                </TouchableOpacity>
            </View >
        );
    }
}

//export default connect()(TaskItemComponent);