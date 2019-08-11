import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware ,compose} from 'redux';
import reservationReducer from './reducers/reservationReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reservationReducer,composeEnhancer(applyMiddleware(thunk)));      

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
     document.getElementById('root'));


