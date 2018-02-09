import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.less';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import Reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import MainMiddleWare from './middlewares/mainMiddleWare';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(
    MainMiddleWare
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers) }>
        <BrowserRouter basename='/'>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
