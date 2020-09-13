import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return (
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/kokzr0iirfwrctlygob2"/>
            </a>
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
              <a className="navbar-item">
    Our Designers
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/stationery" className="navbar-item">
            Stationery
                </Link>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
        Notebooks
                  </a>
                  <a className="navbar-item">
        Diaries
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-link">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
        Log in
                  </a>
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