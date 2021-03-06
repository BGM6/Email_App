import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/index';

import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducers,
	{},

	composeEnhancers(applyMiddleware(thunk)),);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,
	document.querySelector('#root')
);