/**
 * Fake Online REST API for Testing and Prototyping
 * https://jsonplaceholder.typicode.com/
 */
const URL = 'https://jsonplaceholder.typicode.com/users';

const actions = {
    /**
     * Экшен получение юзеров по строке
     * @param searchUser Строка поиска.
     */
        getUsers (username: string) {
        const searchUser = username.toLocaleLowerCase().trim();

        return (dispatch) => {
            dispatch({
                type: 'GET_USER_REQUEST'
            });

            fetch(URL)
                .then((response) => response.json())
                .then((json: any) => {

                    const users = json.filter((item) => {
                        const itemName = item.username.toLocaleLowerCase();
                        return itemName.includes(searchUser);
                    });

                    dispatch({
                        type: 'GET_USER_SUCCESS',
                        payload: users
                    });
                });
        }
    },
    /**
     * Экшен выбора юзера.
     * @param user Пользователь.
     */
        selectUser(user: string) {
        return {
            type: 'SELECT_USER',
            payload: user
        }
    }
};

export default actions;
