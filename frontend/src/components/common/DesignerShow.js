import React from 'react'
import axios from 'axios'

class DesignerShow extends React.Component {

  state = {
    designer: [],
    designersStationery: []
  }

  async componentDidMount() {
    try {
      const designerID = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/api/designers/${designerID}`)
      console.log(res.data)
      this.setState({ designer: res.data })
      this.setState({ designersStationery: res.data.stationery })
    } catch (err) {
      console.log(err)
    }
  }
  
  render() {
    if (!this.state){
      return null
    } else {
      console.log(this.state.designer.stationery)
      return (
        <div className='wrapper-designer-show'>
          <div className="three-col content-font designer-show-card ">
            <div className="column is-one-third-desktop is-one-third-tablet is-fullwidth has-text-centered">
              {/* <Link to={`/gigs/${_id}`}> */}

             
                <div className="card-header content-box">
                  <h2 className="has-text-centered gig-card">{this.state.designer.name}</h2>
                </div>

                <div className="card-image">
                  <figure className="image image is-1by1">
                  
                    <img src={this.state.designer.image} alt={this.state.designer.name} loading="lazy" width="300" height="220" />
                  </figure>
                </div>

                <div className="card-header has-text-centered content-box">
                  <div className="card-content has-text-centered">
                    <h5 className="">{this.state.designer.location}</h5>
                    <h5 className="">{this.state.designer.description}</h5>
                  </div>
                </div>


              

              {/* </Link> */}

            </div>
          </div>
          <h1>Shop their designs!</h1>
          <div>{this.state.designersStationery.map(name=>{
            return (
              <>
                <h1 key={name.id}>{name.name}</h1>
                <img src={name.image}/>
              </>
            )
          })}</div>
        </div>

      )
    }
  }
}

export default DesignerShow