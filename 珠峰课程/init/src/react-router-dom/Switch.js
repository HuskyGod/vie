import React, { Component } from 'react'
import {Consumer} from './context'
import pathToRegExp from 'path-to-regexp';
export default class Switch extends Component {
    render() {
        return (
            <Consumer>
                {
                    state => {
                        console.log(state);
                        let pathname = state.location.pathname;
                        let children = this.props.children;
                        for (let i = 0; i < children.length; i++) {
                            let child = children[i];
                            let path = child.props.path || '';
                            let reg = pathToRegExp(path, [], {end: false})
                            if (reg.test(pathname)) {
                                return child;
                            }
                        }
                        return null;
                    }
                }
            </Consumer>
        )
    }
}
