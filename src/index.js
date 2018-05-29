import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css'
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

function contactlist(state = []) {
	return state;
}

const store = createStore(contactlist);
console.log(store.getState());


const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, 
	rootElement);
registerServiceWorker();
