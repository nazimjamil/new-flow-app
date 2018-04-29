// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'router';
import 'styles/main.css';

let node = document.getElementById('root');

if (node) {
  ReactDOM.render(
    Routes,
    node
  );
} else {
  console.warn('Node not found ☠️');
}
