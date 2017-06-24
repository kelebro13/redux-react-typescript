import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {Autocomplete} from "./autocomplete/Autocomplete";
import store from './autocomplete/store';


ReactDOM.render(
    <Provider store={store}>
        <Autocomplete />
    </Provider>,
    document.getElementById('app')
);