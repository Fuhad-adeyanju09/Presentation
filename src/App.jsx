import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import OrderNow from './Components2/OrderNow'
import AboutUs from './Components2/AboutUs'
import Jollof from './Components2/Jollof'
import Chicken from './Components2/Chicken'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ordernow' element={<OrderNow/>}/>     
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/jollof' element={<Jollof/>}/>
          <Route path='/chicken' element={<Chicken/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
