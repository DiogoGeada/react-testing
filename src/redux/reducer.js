import Item from '../models/item';
import { ACTIONS } from './actions';
import { initialState } from './store';

const listReducer = (state = initialState, action) => {

    switch(action.type){
        case ACTIONS.ADD_ITEM:
            let newList = state.list;
            try{
                newList.push(new Item(action.text));
            } catch (error){
                let errorQueue = state.errors;
                errorQueue.Enqueue(error);
                return {
                    ...state,
                    errors: errorQueue
                };
            }

            return {
                ...state,
                list: newList
            };
        case ACTIONS.REMOVE_ITEM:
            if(action.index < state.list.length){
                let newList = [...state.list];
                newList.splice(action.index, 1);

                return {
                    ...state,
                    list: newList
                };
            }
            break;
            default: break;
    }
    
    return state;

}

export default listReducer;