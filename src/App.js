import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader";
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import TopNav from './components/topNav'
import Notinstagram from './components/pages/notinstagram'
import Fractic from './components/pages/fractic'
import Trees from './components/pages/trees'

function App() {
  return (
    <main>
      <BrowserRouter >
        <TopNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/notinstagram" component={Notinstagram} exact />
          <Route path="/fractic" component={Fractic} exact />
          <Route path="/trees" component={Trees} exact />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default hot(module)(App);