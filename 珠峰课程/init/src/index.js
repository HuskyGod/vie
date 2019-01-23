import React, { Component } from 'react'
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom'
import User from './page/user';
import About from './page/about';
import Home from './page/home';

class Index extends Component {
  render() {
    return (
      <Router>
          <div>
              <div>
                  <Link to="/user" >user</Link>
                  <Link to="/about" >about</Link>
                  <Link to="/home" >home</Link>    
              </div>
              <div>
                  <Switch>
                        <Route path="/user" exact={true} component={User}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Redirect to="/home"></Redirect>
                  </Switch>
              </div>
          </div>
      </Router>
    )
  }
}

render(<Index></Index>, window.root)