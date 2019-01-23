import React, { Component } from 'react'
import {Consumer} from './context'
const pathToReg = require('path-to-regexp')
export default class Route extends Component {
  render() {
    return (
      <Consumer>
          {(state) => {
              let {path, component: Component, exact = false} = this.props;
              let pathname = state.location.pathname;
              let keys = [];
              let reg = pathToReg(path, keys, {end: exact});
              keys = keys.map(item => item.name);
              let result = pathname.match(reg);
              let [url, ...values] = result || [];
              let props = {
                  location: state.location,
                  history: state.history,
                  match: {
                    params: keys.reduce((obj, current, idx) => {
                        obj[current] = values[idx];
                        return obj;
                    }, {})
                  }
              }
              if (result) {
                    return <Component {...props}></Component>
              }
              return null;  
          }}
      </Consumer>
    )
  }
}
