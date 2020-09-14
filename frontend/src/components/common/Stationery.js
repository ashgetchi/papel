import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'


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
        <div className="three-col content-font">
          {this.state.stationery.map(stat => {
            return (
            // <div className="three-col-content" key={stat.id}>
            //   <h2>{stat.name}</h2>
            //   <img src={stat.image}/>
            // </div>
              <Link to={`/stationery/${stat.id}`} className="column is-one-third-desktop is-one-third-tablet is-fullwidth has-text-centered" key={stat.id}>
          
                {/* <Link to={`/gigs/${_id}`}> */}

                <div className="gig-card">
                  <div className="card-header content-box">
                    <h2 className="has-text-centered gig-card">{stat.name}</h2>
                  </div>

                  <div className="card-image">
                    <figure className="image image is-1by1">
                    
                      <img src={stat.image} alt={stat.name} loading="lazy" width="300" height="220" />
                    </figure>
                  </div>

                  <div className="card-header has-text-centered content-box">
                    <div className="card-content has-text-centered">
                      <h5 className="">{stat.type}</h5>
                      <h5 className="">{stat.designer}</h5>
                      <h5 className="">{stat.quantity}</h5>
                      <h5 className="">£{stat.price}</h5>
                    </div>
                  </div>


                </div>
            

              </Link>

       
              
              

            )
          })}
        </div>
      </>
    )
  }
}

export default withRouter(Stationery)