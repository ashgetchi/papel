import React from 'react'
// import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
// import { popupNotification } from '../../lib/notification'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class Login2 extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: ''
    },
    error: false
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: false })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/api/users/login/', this.state.formData)
      setToken(res.data.token)
      // popupNotification(`welcome  ${this.state.formData.username}`)
      this.props.history.push('/home')
    } catch (err) {
      this.setState({ error: true })
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
                  <h2 className="subtitle colored is-4">Great design, made even simpler</h2>
                  <p>Please sign in with us here.</p>
                </div>
                <div className="column right has-text-centered">
                  <h1 className="title is-4">Sign in!</h1>
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
                    <button className="button is-block is-primary is-fullwidth is-medium">Log in</button>
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

export default withRouter(Login2)