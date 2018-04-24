// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.css';

let node = document.getElementById('root');

if (node) {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    node
  );
} else {
  console.warn('Node not found ☠️');
}
