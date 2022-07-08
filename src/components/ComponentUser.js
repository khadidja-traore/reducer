import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentUser extends Component {
  render() {
    return (
        <UserConsumer>
            {
                username =>{
                    return <h1>Hello {username}</h1>
                }
            }
        </UserConsumer>

    )
  }
}

export default ComponentUser