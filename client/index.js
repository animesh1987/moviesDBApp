import React from 'react';
import ReactDom from 'react-dom';

import { HelloWorld } from './components/helloWorld.jsx';
import { FirstComponent } from './components/component.jsx';
import { FirstPureComponent } from './components/pureComponent.jsx';
import { FirstFunctionalComponent } from
  './components/functionalComponent.jsx';

const parentElement = React.createElement(
  'div',
  {id: 'id_001'},
  <HelloWorld />,
  <FirstFunctionalComponent />,
  <FirstComponent />,
  <FirstPureComponent />
);

ReactDom.render(
  parentElement,
  document.getElementById('root')
);
