import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

class Navbar extends React.Component {
  render(){
    const isLoggedIn = isAuthenticated()
    return (
      <>
        {isLoggedIn ?
          <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
         
              <div id="navbarBasicExample" className="navbar-menu">
          
              <div className="navbar-item navbar-start">
          
                <div className="buttons">
                  
                  <div className="navbar-brand">
                    <Link to="/home" className="navbar-item" href="https://bulma.io">
             
                      <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/kokzr0iirfwrctlygob2" alt="logo"/>
             
                    </Link>
                    </div>
                    <div className="navbar-item">
                      <Link to="/stationery" className="navbar-item">
            Stationery
                      </Link>
                      </div>

                    
                    <div className="navbar-item">
                      <Link to="/designers" className="navbar-item">
    Our Designers
                      </Link>
                    </div>
                    </div>
                    </div>
              
                  <div className="navbar-item navbar-end">
                    <div className="buttons">
                      <div className="navbar-end">
                        <Link to ='/basket'>
                        <div className="navbar-item
">
                          <img className="basket-img image is-48x48" src="https://icon-library.com/images/grocery-basket-icon/grocery-basket-icon-13.jpg" />
                          </div>
                        </Link>
                      </div>
                      <div className="navbar-item">
                        <Link to ='/'>
                          <div className="navbar-item">
                          <button className="button is-link"
                            onClick={logout}>Log out</button>
                            </div>
                        </Link>
                      </div>
                    </div>
                  </div>
               
               
              </div>
            </nav>
    
                 
                      
          </>
          :
          <>

            <nav className="navbar" role="navigation" aria-label="main navigation">
         
              <div id="navbarBasicExample" className="navbar-menu">
          

          
                <div className="navbar-item navbar-end">
                  <div className="buttons">
                  
                    <Link to="/register2" className="button is-link">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="/login2" className="button is-light">
        Log in
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </>
        }
                 
      </>
    )
  }
}

export default withRouter(Navbar)