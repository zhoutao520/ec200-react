import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    { localStorage.getItem('userToken')!= null ? ( <App />) : ( <Login /> )}
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
