import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import Todo from './src/styles/Todo';
import rootReducer from './src/reducer/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));
const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;