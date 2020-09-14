import React from 'react'
// import Select from 'react-select'
import axios from 'axios'
// import { registerUser } from '../../lib/api'

class Register extends React.Component {

  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
    
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log(this.state.formData)
    try {
      await axios.post('http://localhost:3000/api/users/register/', this.state.formData)
      this.props.history.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  
  render() {
    return (

      <section>

        <div className="hero-gigs-indv text-center">
          <div className="hero-gigs-indv-txt">
            <h2>Sign Up</h2>
            <h4>Register with GigMe below!</h4>
          </div>
        </div>

        <div className="register-form-area">
          <div className="register-form">
            <form onSubmit={this.handleSubmit} className="box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className='input'
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={this.state.formData.username}
                  />
                </div>
               
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className='input'
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                  />
                </div>
                
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className='input'
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.formData.password}
                    onChange={this.handleChange}
                  />
                </div>
                
              </div>

              <div className="field">
                <label className="label">Password confirmation</label>
                <div className="control">
                  <input
                    className='input'
                    type="password"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={this.state.formData.password_confirmation}
                    onChange={this.handleChange}
                  />  
                </div>
                
              </div>

      

              <div className="field">
                <button type="submit" className="button">Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
