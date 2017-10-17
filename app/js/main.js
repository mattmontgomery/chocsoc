import React from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App/App';
import store from './Store';

const root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);
document.body.style.margin = 0;

render(
    <Provider store={store}>
        <BrowserRouter basename="/app">
            <Route component={App} path="/" />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
