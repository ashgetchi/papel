import React from 'react'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'
import Stationery from './components/common/Stationery'
import Designers from './components/common/Designers'
import DesignerShow from './components/common/DesignerShow'
import StationeryShow from './components/common/StationeryShow'
import Home from './components/common/Home'
import Basket from './components/common/Basket'

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
          <Route exact path="/" component={Home}/>


        </Switch>
      </BrowserRouter>
    </>
    
  
  )
}

export default App
