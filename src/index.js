import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import reducer from './redux/reducers/reducer'
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const todoStore = createStore(reducer);

ReactDOM.render(<Provider store={todoStore}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();