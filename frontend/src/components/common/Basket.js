import React from 'react'
import axios from 'axios'
import { getUserId } from '../../lib/auth'
import { withHeaders } from '../../lib/api'
import { Link, withRouter } from 'react-router-dom'



class Basket extends React.Component {
  
  state = {
    user_info: []
  }

  async componentDidMount() {
    const userId = getUserId()
    try {
      console.log(userId)
      const res = await axios.get('http://localhost:3000/api/users/profile/', withHeaders())
      this.setState({ user_info: res.data.basket })
      console.log(res.data.basket)
      this.basketValue()
      
      // this.setState({ user_info: res.data })
    } catch (err) {
      // this.props.history.push('/notfound')
      console.log(err)
    }
  }

  basketValue = () => {
    const basketArray = []
    this.state.user_info.map(item => {
      return basketArray.push(item.price)
    })
    console.log(basketArray)
    const totalNumber = basketArray.reduce((acc, curr) => {
      return acc + curr
    },0)
    console.log(totalNumber)
    return totalNumber
  }

  deleteItem = async (event) => {
    try {
      await axios.delete(`http://localhost:3000/api/stationery/${event.target.value}`,withHeaders())
    } catch (err) {
      console.log(err)
    } 
  }
  


  render(){
    return (
      <>
        <h2 className="basket-text">Your Items Are Here:</h2>
        <div className="basket-wrapper">
          {this.state.user_info.map(item => {
            return <Link to={`/stationery/${item.id}`} className="column is-one-fifth-desktop is-one-third-tablet is-fullwidth has-text-centered" key={item.id}>
          
              {/* <Link to={`/gigs/${_id}`}> */}

              <div className="gig-card">
                <div className="card-header content-box">
                  <h2 className="has-text-centered gig-card">{item.name}</h2>
                </div>

                <div className="card-image">
                  <figure className="image image is-1by1">
                 
                    <img src={item.image} alt={item.name} loading="lazy" width="300" height="220" />
                  </figure>
                </div>

                <div className="card-header has-text-centered content-box">
                  <div className="card-content has-text-centered">
                    <h5 className="">{item.type}</h5>
                    <h5 className="">£{item.price}</h5>
                    <button className="button is-danger is-small" value={item.id} onClick={this.deleteItem}>remove</button>
                  </div>
                </div>
              </div>        
            </Link>    
          })}
        </div>
        <div className="checkout-box">
          <h1 className="basket-text">Your Basket Total Is:{this.basketValue()}</h1>
          <Link to="/checkout">
            <div className="checkout-button">
              <button className="button is-link">checkout</button>
            </div>
          </Link>
        </div>
      </>
    )
  }
}


export default withRouter(Basket)