import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './app';
import { NotFound } from './notFound';

export class Main extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/search/*" component={App} />
          <Route exact path="/film/:id" component={App} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
