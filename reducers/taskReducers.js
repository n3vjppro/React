import { TOGGLE_ONE_TASK, ADD_NEW_TASK } from '../actions/actionTypes';

const defaultState = [
    {
        taskId: 1,
        taskName: 'abc',
        completed: false
    },
    {
        taskId: 2,
        taskName: 'ab',
        completed: true
    },
    {
        taskId: 3,
        taskName: 'a',
        completed: false
    }
]

const taskReducers = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_NEW_TASK:
            return [
                ...state,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]

        case TOGGLE_ONE_TASK:
            return state.map(task =>
                (task.taskId === action.taskId)
                    ? { ...task, completed: !task.completed }
                    : task
            )
        default: return state;
    }
}

export default taskReducers;