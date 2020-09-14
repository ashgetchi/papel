import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

class Designers extends React.Component {

  state = {
    designers: []
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/api/designers')
    console.log(res.data)
    this.setState({ designers: res.data })
  }

  render(){
    return ( 
      <>
        <div className="three-col content-font">
          {this.state.designers.map(stat => {
            return (
    
              <div className="column is-one-third-desktop is-one-third-tablet is-fullwidth has-text-centered" key={stat.id}>
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
                      <h5 className="">{stat.location}</h5>
                      <h5 className="">{stat.designer}</h5>
                      <Link to={`/designers/${stat.id}`}>See their designs</Link>
                    </div>
                  </div>


                </div>

                {/* </Link> */}

              </div>

            )
          })}
        </div>
      </>
    

            
    )
  }
}

export default withRouter(Designers)