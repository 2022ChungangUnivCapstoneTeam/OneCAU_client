import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import configureStore from './redux/configure_store';
import "antd/dist/antd.css";  // import antd global
import 'bootstrap/dist/css/bootstrap.min.css';  // import react-bootstrap global

const store = configureStore();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
