import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router'

import { Provider } from 'react-redux';

import store, { history } from './store'

import CategoriesContainer from './containers/CategoriesContainer';
import ProdactsContainer from './containers/ProdactsContainer'

const app = <Provider store={store}>
	<Router history={history}>
		<Route path="/" component={CategoriesContainer} />
		<Route path=':cat' component={ProdactsContainer}/>
	</Router>
</Provider>

render(app,  document.getElementById('root'));

