import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './actions';
import {IAutocompleteProps, IAutocompleteState, IUser} from './Models';

/**
 * Компонент выбора юзеров с автопоиском.
 */
class Autocomplete extends React.Component<IAutocompleteProps, IAutocompleteState> {

    constructor(props) {
        super(props);
        this.state = {
            searchUser: '',
            isSelecting: false,
        };
    }

    componentDidMount() {
        const {user} = this.props;
        user && this.setState({
            searchUser: user.username
        });
    }

    toggleShowOptions = () => {
        this.setState({
            isSelecting: !this.state.isSelecting
        })
    };

    /**
     * Обработчик изменения запроса для поиска юзеров.
     */
    handleChangeOption = (e: any) => {
        const {getUsers} = this.props.actions;
        const searchUser: string = e.target.value;
        this.setState({
            searchUser
        }, () => {
            !!searchUser.trim() && getUsers(searchUser);
        });
    }

    /**
     * Обработчик выбора юзера.
     */
    handleSelect = (user: IUser) => {
        const {selectUser} = this.props.actions;
        this.setState({
            searchUser: user.username
        }, () => {
            selectUser(user);
        })

    }

    /**
     * Рендеринг найденных юзеров.
     */
    renderOptions() {
        const {options, isLoading} = this.props;
        let template;
        if (isLoading) {
            template = <li>Loading...</li>
        } else if (options && options.length) {
            template = options.map((item: IUser, index: number) => {
                return <li className="option" key={index} value={item.username}
                           onClick={this.handleSelect.bind(this, item)}>{item.username}</li>
            })
        } else {
            template = <li>Нет данных</li>
        }
        return (
            <ul className="selectOption">
                {template}
            </ul>
        );
    }

    render() {
        const {searchUser, isSelecting} = this.state;
        return (
            <div
                onClick={this.toggleShowOptions}
            >
                <input
                    className="select"
                    onChange={this.handleChangeOption}
                    value={searchUser}/>
                {isSelecting && this.renderOptions()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        options: state.options,
        isLoading: state.isLoading,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
