import {IStore, IAction} from './Models';

/**
 * Начальное состояние Redux-хранилища.
 */
const initialState: IStore = {
    options: [],
    isLoading: false,
    user: null
};

/**
 * Редюсер.
 * @param state
 * @param action
 */
const reducer = (state: IStore = initialState, action: IAction) => {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                options: action.payload,
                isLoading: false
            };
        case 'SELECT_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

export {IAction, initialState, reducer};
