import React, { Component } from 'react'
import {Link} from '../../react-router-dom'
export default class userlist extends Component {
  render() {
    return (
      <div>
        <Link to="/user/detail/1" >1</Link>
        <br />
        <Link to="/user/detail/2" >2</Link>
        <br />
        <Link to="/user/detail/3" >3</Link>
        
      </div>
    )
  }
}
