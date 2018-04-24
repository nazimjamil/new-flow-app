// @flow

import { hydrate, render } from 'react-dom';
import Routes from 'router';
import 'styles/main.css';

const node = document.getElementById('root');

if (node) {
  if (node.hasChildNodes()) {
    hydrate(Routes, node);
  } else {
    render(Routes, node);
  }
} else {
  console.warn('Node not found ☠️'); // eslint-disable-line
}
