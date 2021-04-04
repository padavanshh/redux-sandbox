import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, bindActionCreators} from "redux";
import {Provider} from 'react-redux';
import reducer from "./reducer";
import App from "./components/app";

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))

