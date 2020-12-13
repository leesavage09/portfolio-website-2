import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader";
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import TopNav from './components/topNav'
import Notinstagram from './components/pages/notinstagram'
import Fractic from './components/pages/fractic'
import Trees from './components/pages/trees'
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <main>
      <BrowserRouter >
        <TopNav />
        <CSSTransitionRoute path="/" component={Home} />
        <CSSTransitionRoute path="/contact" component={Contact} />
        <CSSTransitionRoute path="/notinstagram" component={Notinstagram} />
        <CSSTransitionRoute path="/fractic" component={Fractic} />
        <CSSTransitionRoute path="/trees" component={Trees} />
      </BrowserRouter>
    </main>
  )
}

export default hot(module)(App);

function CSSTransitionRoute(props) {
  return (
    <Route path={props.path} exact>
      {({ match }) => (
        <CSSTransition
          in={match != null}
          classNames="page"
          timeout={300}
          unmountOnExit
        >
          {props.component}
        </CSSTransition>
      )}
    </Route>)
}