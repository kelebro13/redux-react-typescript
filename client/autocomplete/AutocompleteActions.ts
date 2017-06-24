import {IAction, IUser} from './Models';

/**
 * Fake Online REST API for Testing and Prototyping
 * https://jsonplaceholder.typicode.com/
 */
const URL = 'https://jsonplaceholder.typicode.com/users';

class AutocompleteActions implements IAction{

    constructor(private dispatch) {
        this.dispatch = dispatch;
    }

    getUsers = (username: string) => {
        console.log(this);
        const searchUser = username.toLocaleLowerCase().trim();
        const disp = this.dispatch;
        disp({
            type: 'GET_USER_REQUEST'
        });
        return fetch(URL)
            .then((response) => response.json())
            .then((response: any) => {

                    const users = response.filter((item) => {
                        const itemName = item.username.toLocaleLowerCase();
                        return itemName.includes(searchUser);
                    });

                    disp({
                        type: 'GET_USER_SUCCESS',
                        payload: users
                    });
                }
            );
    };

    selectUser = (user: IUser) => {
        return {
            type: 'SELECT_USER',
            payload: user
        }
    }
}

export {AutocompleteActions};
