import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

class StationeryShow extends React.Component {
 
  state = {
    stationery: []
  }

  async componentDidMount() {
    try {
      const stationeryID = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/api/stationery/${stationeryID}`)
      console.log(res.data)
      this.setState({ stationery: res.data })
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
          <div className="stationery-show-description">
            <div className="card-header">
              {this.state.stationery.description}
            </div>
            <Link to={`/designers/${this.state.stationery.designer}`} className="navbar-item">
    See more from this designer here! 
            </Link>
      
            <div className="column is-one-third-desktop is-one-third-tablet is-fullwidth has-text-centered" key={this.state.stationery.id}>
              {/* <Link to={`/gigs/${_id}`}> */}

              <div className="gig-card">
                <div className="card-header content-box">
                  <h2 className="has-text-centered gig-card">{this.state.stationery.name}</h2>
                </div>

                <div className="card-image">
                  <figure className="image image is-1by1">
            
                    <img src={this.state.stationery.image} alt={this.state.stationery.name} loading="lazy" width="300" height="220" />
                  </figure>
                </div>

                <div className="card-header has-text-centered content-box">
                  <div className="card-content has-text-centered">
                    <h5 className="">{this.state.stationery.type}</h5>
                    <h5 className="">{this.state.stationery.designer}</h5>
                    <h5 className="">{this.state.stationery.quantity}</h5>
                    <h5 className="">£{this.state.stationery.price}</h5>
                  </div>
                </div>


              </div>

              {/* </Link> */}

            </div>

            {/* <div>{this.state.designersStationery.map(name=>{
            return (
              <div key={name.id}>{name.name}</div>
            )
          })}</div> */}
          </div>
        </>

      )
    }
  }
}

export default withRouter(StationeryShow)