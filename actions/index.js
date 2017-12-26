import { TOGGLE_ONE_TASK, ADD_NEW_TASK } from './actionTypes';

let newTaskId = 4;
export const addNewTask = (inputTaskName) => {

    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    }
}

export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId,
    }
}