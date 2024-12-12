/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import Nav from "./Nav"

const Header = () => {
  return (
    <>
        <header>
            <Nav/>
            <div className="food">
                <h1 className="foodland">FoodLand</h1>
                <h1 className="continental">The FoodHub </h1>
                <h1 className="dishes">Of Gen-Z</h1>
              <span className="span"></span>
              <Link to={'/ordernow'}><button className="order">Order Now</button></Link>
            </div>
            <Carousel/>
        </header>
    </>
  )
}

export default Header
