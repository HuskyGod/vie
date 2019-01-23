import React, { Component } from 'react'

export default class userDetail extends Component {
  render() {
    console.log(this.props)  
    return (
      <div>
        detail ： {this.props.match.params.id}
      </div>
    )
  }
}
