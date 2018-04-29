import * as React from "react";
import { Home } from './pages/home'
import { ErrorBoundary } from './errorBoundary';

export class App extends React.Component {
  public render() {
    return (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    )
  }
}