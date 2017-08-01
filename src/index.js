import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router'

import { Provider } from 'react-redux';

import store, { history } from './store'

import App from './components/App';

const app = <Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App} />
	</Router>
</Provider>

render(app,  document.getElementById('root'));

