/**
 * Модель экшенов.
 */
export interface IAction {
    /**
     * Получение списка пользователей в зависимости от строки поиска.
     *
     * @param {string} username Строка поиска.
     */
    getUsers: (username: string) =>Promise<void>;
    /**
     * Выбор пользователя
     *
     * @param {IUser} user Пользователь.
     */
    selectUser: (user: IUser) => void;
}

/**
 * Модель внешних свойст компонента.
 *
 * @prop {IAction} actions Экшены.
 * @prop {boolean} isLoading Флаг, получин список пользователей или нет.
 * @prop {IUser[]} options Список пользователей.
 * @prop {IUser} user Выбранный пользователь (на текущий момент).
 */
export interface IAutocompleteProps {
    actions: IAction;
    isLoading: boolean;
    options: IUser[];
    user: IUser;
};

/**
 * Модель внутрених свойст компонента.
 *
 * @prop {boolean} isShowOptions Флаг, показать список пользователей или нет.
 * @prop {string} searchUser Строка поиска.
 */
export interface IAutocompleteState {
    isShowOptions: boolean;
    searchUser: string;
};

/**
 * Модель Redux-хранилища.
 *
 * @prop {boolean} isLoading Флаг, получин список пользователей или нет.
 * @prop {IUser[]} options Список пользователей.
 * @prop {IUser} user Выбранный пользователь.
 */
export interface IStore {
    isLoading: boolean;
    options: IUser[];
    user: IUser;

};

/**
 * Модель действий.
 */
export interface IFluxStandartAction {
    type: string;
    payload: Object;
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
