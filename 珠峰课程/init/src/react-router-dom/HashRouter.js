import React, { Component } from 'react'
import {Provider} from './context'
export default class HashRouter extends Component {
    constructor() {
        super();
        this.state = {
            location: {
                pathname: window.location.hash.slice(1) || "/" 
            }
        }
    }
    componentDidMount(){
        //默认hash没有跳转/
        window.location.hash = window.location.hash || '/';
        window.addEventListener('hashchange', () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1) || "/" 
                }
            })
        })
    }
    
    render() {
        let value = {
            location: this.state.location
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}
