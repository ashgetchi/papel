import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Home = () => {
  return (
    <>
      {/* <h1 className="welcome">Welcome to Papel! 
      Great design made even simpler
      </h1>
       */}
      <div className="homepage-wrapper">
      
        <Link to ="/stationery" className="shop-by-stationery">
          <h1>Shop By Stationery</h1>
        </Link>
        <Link to="/designers" className="shop-by-designer">
          <h1>Shop By Designer</h1>
        </Link>
        
      </div>
    </>
    
  )
}

export default withRouter(Home)