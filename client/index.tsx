import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './main.scss';

console.log(Provider, createStore);

import { App } from './app';

ReactDom.render(<App />, document.getElementById("app"));
