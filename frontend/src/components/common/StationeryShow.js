import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { withHeaders } from '../../lib/api'

class StationeryShow extends React.Component {
 
  state = {
    stationery: [],
    basket: []
    
  }

  async componentDidMount() {
    try {
      const stationeryID = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/api/stationery/${stationeryID}`, withHeaders())
      console.log(res.data)
      this.setState({ stationery: res.data })
    } catch (err) {
      console.log(err)
    }
  }

    addToUserBasket = async(event) => {
      event.preventDefault()
      const stationery = this.props.match.params.id
      try {
        await axios.put(`http://localhost:3000/api/stationery/${stationery}/`, null, withHeaders())
        this.props.history.push('/basket')
      } catch (err) {
        console.log(err)
      }
    }
  
    render() {
      if (!this.state){
        return null
      } else {
      // console.log(this.state.st.stationery)
        return (
          <>
            <div className="wrapper-stationery-show">
              <div className="wrapper-image-stationery">
                <h2 className="has-text-centered">{this.state.stationery.name}</h2> 
                <img src={this.state.stationery.image} alt={this.state.stationery.name} loading="lazy" />



 
      
                <div key={this.state.stationery.id}>
                  {/* <Link to={`/gigs/${_id}`}> */}

                   
              
                </div>
              </div>

              <div className="description-wrapper">
                <p>{this.state.stationery.description}</p>
                <h5 className="">{this.state.stationery.type}</h5>
                <h5 className="">£{this.state.stationery.price}</h5>
                <form onSubmit={this.addToUserBasket}>
                  <button 
                    className="button is-danger is-rounded"
                  >
                      Add to basket</button>

                </form>
                <Link to={`/designers/${this.state.stationery.designer}`} className="navbar-item has-text-link text-has-centered">
              See more from this designer here! 
                </Link>
              </div>
            </div>
          </>


        )
      }
    }
}

export default withRouter(StationeryShow)