import React from 'react'
// import Select from 'react-select'
import axios from 'axios'
// import { registerUser } from '../../lib/api'
import { Link, withRouter } from 'react-router-dom'
import { setToken } from '../../lib/auth'


class Register2 extends React.Component {

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
      const res = await axios.post('http://localhost:3000/api/users/login/', this.state.formData)
      this.props.history.push('/')
      setToken(res.data.token)
    } catch (err) {
      console.log(err)
    }
  }
  
  render() {
    return (

      <div className="container-register-page">
        <section className="container-register">
          <div className="columns is-multiline">
            <div className="column is-10 is-offset-2 register">
              <div className="columns">
                <div className="column left">
                  <h1 className="title is-1">PAPEL</h1>
                  <h2 className="subtitle colored is-4">!Fresh stationery for your new normal</h2>
                  <p>Great design, made even simpler. Sign up here if its your first time, otherwise <Link to="/login">login here </Link>.</p>
                </div>
                <div className="column right has-text-centered">
                  <h1 className="title is-4">Sign up today</h1>
                  <p className="description">We don't do spam dont worry</p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="text" placeholder="e-mail" name="email" onChange={this.handleChange} value={this.state.formData.email}/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="text" placeholder="username" name="username" onChange={this.handleChange} value={this.state.formData.username}/>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="password" placeholder="password" name="password" value={this.state.formData.password} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="password" placeholder="confirm password" name="password_confirmation" value={this.state.formData.password_confirmation} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <button className="button is-block is-primary is-fullwidth is-medium">Sign Up</button>
                    <br />
                    <small><em>Created by Ash Atighetchi.</em></small>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="photo-container-register">
        </div>
      </div>


    )
  }
}

export default withRouter(Register2)
