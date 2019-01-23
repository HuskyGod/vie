import React, { Component } from 'react'
import UserAdd from './useradd'
import UserList from './userlist'
import UserDetail from './userDetail'
import {Link, Route} from '../../react-router-dom'

export default class User extends Component {
  render() {
    return (
      <div>
          <div>
              <Link to="/user/add">添加用户</Link>
              <Link to="/user/list">用户列表</Link>
          </div>
          <div>
              <Route path="/user/add" component={UserAdd}></Route>
              <Route path="/user/list" component={UserList}></Route>
              <Route path="/user/detail/:id" component={UserDetail}></Route>              
          </div>
      </div>
    )
  }
}
