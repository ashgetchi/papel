import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

class Navbar extends React.Component {
  render(){
    const isLoggedIn = isAuthenticated()
    return (
      
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" href="https://bulma.io">
             
              <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/kokzr0iirfwrctlygob2" alt="logo"/>
             
            </Link>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                About
              </a>
              <Link to="/designers" className="navbar-item">
    Our Designers
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/stationery" className="navbar-item">
            Stationery
                </Link>

              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
               
                  {isLoggedIn ?
                    <>
                      <Link to ='/basket'>
                        <img className="basket-img" src="https://icon-library.com/images/grocery-basket-icon/grocery-basket-icon-13.jpg"/>
                      </Link>
                      <Link to ='/'>
                        <button className="button is-link"
                          onClick={logout}>Log out</button>
                      </Link>
                    </>
                    :
                    <>
                      <Link to="/register" className="button is-link">
                        <strong>Sign up</strong>
                      </Link>
                      <Link to="/login" className="button is-light">
        Log in
                      </Link>
                    </>
                  }
                 
             
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>

    )
  }
}

export default withRouter(Navbar)