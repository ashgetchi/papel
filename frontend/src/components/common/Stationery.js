import React from 'react'
import axios from 'axios'

class Stationery extends React.Component {

  state = {
    stationery: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/stationery/')
      this.setState({ stationery: res.data })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    
    return (
      <>
        <h1>hello</h1>
        <div className="three-col">
          {this.state.stationery.map(stat => {
            return (
              <div className="three-col-content" key={stat._id}>
                <h2>{stat.name}</h2>
                <img src={stat.image}/>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default Stationery