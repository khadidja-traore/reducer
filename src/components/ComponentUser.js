import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentUser extends Component {


  render() {
    return (

        <UserConsumer>

            {username => {
                return (<div>
                    {username}
                </div>)
            }}

            
        </UserConsumer>
      
    )
  }
}

export default ComponentUser