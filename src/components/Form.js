import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname: '',
         lastname: '',
         email: '',
         message: '',
      }
    }
    handleFirstnameChange = event => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastnameChange = event => {
        this.setState({
            lastname: event.target.value
        })
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    }


  render() {
    const {firstname, lastname, email, message} = this.state;

    return (
      <div>
        	<form action ="http://localhost:5000/submit-data-form" method="post" >
				<div>
					<label>Firstname </label>
					<input
						type="text"
						value={firstname}
                        onChange= {this.handleFirstnameChange}
                        name="firstname"
					/>
				</div>
				<div>
					<label>Lastname </label>
					<input
						type="text"
						value={lastname}
                        onChange= {this.handleLastnameChange}
                        name="lastname"
					/>
				</div>
				<div>
					<label>Email </label>
					<input
						type="email"
						value={email}
                        onChange= {this.handleEmailChange}
                        name="email"
					/>
				</div>
				<div>
					<label>Message</label>
					<textarea
						value={message}
                        onChange= {this.handleMessageChange}
                        name="message"
					/>
				</div>
				<button type="submit">Submit</button>
			</form>



      </div>
    )
  }
}

export default Form