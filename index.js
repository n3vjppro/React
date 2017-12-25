import { AppRegistry, Text } from 'react-native';
//import App from './App';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {createStore} from 'redux';
import TaskManagerComponent from './components/TaskManagerComponent'

import Root from './components/ahihi/Root';
// let store = createStore(allReducers);
// const App = () =>(
//     <Provider store={store}>
//         <TaskManagerComponent />
//     </Provider>
// );


AppRegistry.registerComponent('ExamRedux', () => Root);
