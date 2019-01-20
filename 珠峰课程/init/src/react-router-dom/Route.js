import React, { Component } from 'react'
import {Consumer} from './context'
const pathToReg = require('path-to-regexp')
export default class Route extends Component {
  render() {
    return (
      <Consumer>
          {(state) => {
              let {path, component: Component, exact} = this.props;
              let pathname = state.location.pathname;
              let reg = pathToReg(path, [], {end: exact})
              let result = pathname.match(reg);
              if (result) {
                    return <Component></Component>
              }
              return null;  
          }}
      </Consumer>
    )
  }
}
