import {createStore} from 'redux';
import {initialState, reducer} from './reducer';

const store = createStore(reducer, initialState);

export default store;