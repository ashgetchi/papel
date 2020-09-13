import React from 'react'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'
import Stationery from './components/common/Stationery'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/stationery" component={Stationery}/>

        </Switch>
      </BrowserRouter>
    </>
    
  
  )
}

export default App
