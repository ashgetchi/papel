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
          <div className = 'wrapper-stationery-show'>
            <div className="stationery-show-description">
           
            

              <div className="card-content has-text-centered">
                <div className="card-image">
                  <div className="card-header has-text-centered content-box">
                    <div className="gig-card">
                      <div className="card-header content-box">
                        <h2 className="has-text-centered gig-card">{this.state.stationery.name}</h2>
                      </div>

                   
                    </div>
                  </div>
                  <figure className="image image is-1by1">
            
                    <img src={this.state.stationery.image} alt={this.state.stationery.name} loading="lazy" width="300" height="220" />
                  </figure>
                </div>

                <h5 className="">{this.state.stationery.type}</h5>
                <h5 className="">{this.state.stationery.designer}</h5>
                <h5 className="">{this.state.stationery.quantity}</h5>
                <h5 className="">£{this.state.stationery.price}</h5>
                <form onSubmit={this.addToUserBasket}>
                  <button 
                    className="button is-danger is-rounded"
                  >
                      Add to basket</button>
                </form>

                <Link to={`/designers/${this.state.stationery.designer}`} className="navbar-item has-text-link">
              See more from this designer here! 
                </Link>
      
                <div className="column is-one-third-desktop is-one-third-tablet is-fullwidth has-text-centered" key={this.state.stationery.id}>
                  {/* <Link to={`/gigs/${_id}`}> */}

                   

                </div>

                {/* </Link> */}

              </div>
              <div className="card-description card-content has-text-centered card-header gig-card">
                <p>{this.state.stationery.description}</p>
              </div>

              {/* <div>{this.state.designersStationery.map(name=>{
            return (
              <div key={name.id}>{name.name}</div>
            )
          })}</div> */}
            </div>
          </div>

        )
      }
    }
}

export default withRouter(StationeryShow)