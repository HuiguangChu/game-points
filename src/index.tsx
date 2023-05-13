import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { createRoot, Root } from 'react-dom/client';

import { Router } from 'react-router-dom';
import { createBrowserHistory, History, LocationState } from 'history';
import App from './components/App';
import store from './redux/store';

const container: HTMLElement = document.getElementById('react-root');
const history: History<LocationState> = createBrowserHistory();
const root: Root = createRoot(container);

root.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
);
