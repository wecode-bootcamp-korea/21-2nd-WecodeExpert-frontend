import React from 'react';
// import Nav from "./Components/Nav/Nav";
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import Category from './Pages/Category/Category';
import Join from './Pages/Join/Join';
import Expert from './Pages/Expert/Expert';
import ExpertStep1Type from './Pages/Expert/ExpertStep1Type';
import ExpertStep2Agree from './Pages/Expert/ExpertStep2Agree';
import ExpertStep3Basic from './Pages/Expert/ExpertStep3Basic';
import ExpertStep4Seller from './Pages/Expert/ExpertStep4Seller';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/expert" component={Expert} />
          <Route exact path="/expert/join/introduce" component={Expert} />
          <Route exact path="/expert/join/type" component={ExpertStep1Type} />
          <Route exact path="/expert/join/agree" component={ExpertStep2Agree} />
          <Route exact path="/expert/join/basic" component={ExpertStep3Basic} />
          <Route
            exact
            path="/expert/join/seller"
            component={ExpertStep4Seller}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
