import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';

const mapStateToProps = state => {
    return {
    }

}

const mapDispatchToProps = (state ) => {
    return {
        tasks:!state?[]:state
        }
    }


const TaskItemContainer = connect()(TaskItemComponent);
export default TaskItemContainer;
