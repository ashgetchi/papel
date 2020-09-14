import React from 'react'
import axios from 'axios'

class Basket extends React.Component {
  
  state = {
    user_info: []
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3000/api/users/')
  }

  render(){
    return (
      <h1>Basket Page</h1>
      <h2>Your Items Are Here:</h2>

    )
  }
}

export default Basket