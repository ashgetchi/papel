import React from 'react'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'
import Stationery from './components/common/Stationery'
import Designers from './components/common/Designers'
import DesignerShow from './components/common/DesignerShow'
import StationeryShow from './components/common/StationeryShow'
import Home from './components/common/Home'
import Basket from './components/common/Basket'
import Login from './components/auth/login'
// import Register from './components/auth/register'
import Register2 from './components/auth/register-2'
import Login2 from './components/auth/login2'
import Checkout from './components/common/Checkout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/stationery" component={Stationery}/>
          <Route exact path="/designers" component={Designers}/>
          <Route exact path="/designers/:id" component={DesignerShow}/>
          <Route exact path="/stationery/:id" component={StationeryShow}/>
          <Route exact path="/basket/" component={Basket}/>
          <Route exact path="/login/" component={Login}/>
          {/* <Route exact path="/register/" component={Register}/> */}
          <Route exact path="/register2/" component={Register2}/>
          <Route exact path="/login2/" component={Login2}/>
          <Route exact path="/" component={Register2}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/checkout" component={Checkout}/>


        </Switch>
      </BrowserRouter>
    </>
    
  
  )
}

export default App
