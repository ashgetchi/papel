import React from 'react'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'
import Stationery from './components/common/Stationery'
import Designers from './components/common/Designers'
import DesignerShow from './components/common/DesignerShow'
import StationeryShow from './components/common/StationeryShow'

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


        </Switch>
      </BrowserRouter>
    </>
    
  
  )
}

export default App
