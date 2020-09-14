import React from 'react'
import axios from 'axios'
import { getUserId } from '../../lib/auth'
import { withHeaders } from '../../lib/api'


class Basket extends React.Component {
  
  state = {
    user_info: []
  }

  async componentDidMount() {
    const userId = getUserId()
    try {
      console.log(userId)
      const res = await axios.get('http://localhost:3000/api/users/profile/', withHeaders())
      console.log(res.data)
      this.setState({ user_info: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
      console.log(err)
    }
  }
  
  render(){
    return (
      <>
        <h1>Basket Page</h1>
        <h2>Your Items Are Here:
          {this.state.user_info.basket}
        </h2>
      </>
    )
  }
}


export default Basket