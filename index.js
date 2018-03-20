import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';
import ReactDOM from 'react-dom';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
ReactDOM.render(
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    <Provider store={store}>
      <App/>
    </Provider>,
    rootElement
);