import React, { Component } from 'react'

export default class useradd extends Component {
  render() {
    return (
      <div>
          <div onClick={() => {
              this.props.history.push('/user/list')
          }}>233</div>
      </div>
    )
  }
}
