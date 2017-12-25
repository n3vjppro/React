
import {createStore} from 'redux';

const changeColor={
    color:true,
}

 const reducer=(state=changeColor, action)=>{
    if(action.type ='CHANGE'){
        // ...state,
        return{
            color:!state.color,
        }
    }
 }
 const store=createStore(reducer);
 export default store;