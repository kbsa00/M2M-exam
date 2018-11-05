import {ACTION_TYPE} from '../actions/types';

export default function(state = null, action){

    switch(action.type){
        case ACTION_TYPE: 
            return state;  
        default:
            return state;
    }
}   