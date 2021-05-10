import { createStore } from "redux";
import listReducer from './reducer';
import Queue from '../dataStructures/queue';

export const initialState = {
    list: [],
    errors: new Queue()
}

const store = createStore(listReducer, initialState);


export default store;