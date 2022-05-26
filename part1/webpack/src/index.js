import React from 'react';
import ReactDOM from 'react-dom';
import sayHi from './to-greet.js';
//this is the entry point of the app src/index.js

const obj = {};
//optional chaining
obj?.hola;

ReactDOM.render(
  <h1>Funcionando la transformación , trés bien.</h1>,
  document.getElementById('app')
);
