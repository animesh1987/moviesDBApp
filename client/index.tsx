import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from 'react-redux';
import {store} from "./store";

import './main.scss';

import App  from './app';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDom.render(app, document.getElementById("app"));
