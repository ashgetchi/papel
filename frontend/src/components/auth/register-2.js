import React from 'react'
// import Select from 'react-select'
import axios from 'axios'
// import { registerUser } from '../../lib/api'

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
      this.props.history.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  
  render() {
    return (

  
      <section className="container">
        <div className="columns is-multiline">
          <div className="column is-8 is-offset-2 register">
            <div className="columns">
              <div className="column left">
                <h1 className="title is-1">Super Cool Website</h1>
                <h2 className="subtitle colored is-4">Lorem ipsum dolor sit amet.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex deleniti aliquam tempora libero excepturi vero soluta odio optio sed.</p>
              </div>
              <div className="column right has-text-centered">
                <h1 className="title is-4">Sign up today</h1>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="text" placeholder="Name"/>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="email" placeholder="Email"/>
                    </div>
                  </div>
                  <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
                  <br />
                  <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default Register2
