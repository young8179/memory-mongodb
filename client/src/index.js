import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/store.js'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
    
    <App />
  </BrowserRouter>

  </Provider>,
    document.getElementById('root')
  );