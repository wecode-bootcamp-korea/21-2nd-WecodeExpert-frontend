import React from 'react';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import Category from './Pages/Category/Category';
import Join from './Pages/Join/Join';
import Expert from './Pages/Expert/Expert';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/expert/join" component={Expert} />
          <Route exact path="/expert/join/:page" component={Expert} />
          <Route exact path="/category/:id" component={Category} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
