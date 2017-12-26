import {connect} from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';
//import {alert} from 'react-native';

const mapStateToProps = (state)=>{
    //alert(`state send to task list =${JSON.stringify(state)} `);
    return{
        tasks:!state?[]:state
    }
};

const TaskListContainer = connect (mapStateToProps)(TaskListComponent);
export default TaskListContainer;