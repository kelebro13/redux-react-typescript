/**
 * Модель внешних свойст компонента.
 */
export interface IAutocompleteProps {
    options: IUser[];
    isLoading: boolean;
    user: IUser;
    actions: any;
};

/**
 * Модель внутрених свойст компонента.
 */
export interface IAutocompleteState {
    searchUser: string;
    isSelecting: boolean;
};

/**
 * Модель Redux-хранилища.
 */
export interface IStore {
    options: IUser[];
    isLoading: boolean;
    user: string;
};

/**
 * Модель действий.
 */
export interface IAction {
    type: string;
    payload: string;
};

/**
 * Модель пользователя от https://jsonplaceholder.typicode.com/
 */
export interface IUser {
    id: number;
    name: string,
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
};
