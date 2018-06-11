import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from "./store";

import './main.scss';

import { Main } from './main';

const app = (
  <Provider store={store}>
    <Router>
      <Main>
      </Main>
    </Router>
  </Provider>
);

ReactDom.render(app, document.getElementById("app"));
