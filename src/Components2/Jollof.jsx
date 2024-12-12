import Footer from "../Components/Footer"
import add from '../images/add.svg'
import chicken from '../svg/chicken.svg'
import jollof from '../svg/bowl of white rice.svg'
import localfood from '../svg/bowl.svg'
import bakery from '../svg/pretcel.svg'
import burgers from '../svg/burger.svg'
import desserts from '../svg/food.svg'
import friedrice from '../svg/food.svg'
import juices from '../svg/glass of juice.svg'
import nigerian from '../svg/food.svg'
import pasta from '../svg/pasta.svg'
import shawarma from '../svg/shawarma.svg'
import snacks from '../svg/pretcel.svg'
import { Link } from "react-router-dom"
import Nav2 from "./Nav2"
import { Jollofrice } from "../Data/Jollofrice"

const Jollof = () => {
  return (
    <>
    <Nav2/>
    <section className="mainjollof">
        <div className="leftcart">
            <h1 style={{color:'black', textAlign:'center', marginBottom:'30px'}}>Our Menu</h1>
            <div className="chicken">
              <img src={nigerian} alt="" className="chick"/>
              <Link to={'/ordernow'} style={{textDecoration:'none', color:'black'}}><h1>Popular Cuisines</h1></Link>
            </div>
            <div className="chicken">
              <img src={chicken} alt="" className="chick"/>
              <Link to={'/chicken'}><h1>Chicken</h1></Link>
            </div>
            <div className="chicken">
              <img src={jollof} alt="" className="chick"/>
              <h1>Jollof</h1>
            </div>
            <div className="chicken">
              <img src={localfood} alt="" className="chick"/>
              <h1>Locals</h1>
            </div>
            <div className="chicken">
              <img src={bakery} alt="" className="chick"/>
              <h1>Bakery</h1>
            </div>
            <div className="chicken">
              <img src={burgers} alt="" className="chick"/>
              <h1>Burgers</h1>
            </div>
            <div className="chicken">
              <img src={desserts} alt="" className="chick"/>
              <h1>Desserts</h1>
            </div>
            <div className="chicken">
              <img src={friedrice} alt="" className="chick"/>
              <h1>Fried Rice</h1>
            </div>
            <div className="chicken">
              <img src={juices} alt="" className="chick"/>
              <h1>Juices</h1>
            </div>
            <div className="chicken">
              <img src={nigerian} alt="" className="chick"/>
              <h1>Nigerian</h1>
            </div>
            <div className="chicken">
              <img src={pasta} alt="" className="chick"/>
              <h1>Pasta</h1>
            </div>
            <div className="chicken">
              <img src={shawarma} alt="" className="chick"/>
              <h1>Shawarma</h1>
            </div>
            <div className="chicken">
              <img src={snacks} alt="" className="chick"/>
              <h1>Snacks</h1>
            </div>
        </div>
        <div className="wholejollof">
          {Jollofrice.map(({name, id, image, price, count})=>(
            <div key={id} className="boxforimage">
                <div style={{ backgroundImage: `url(${image})`}} className="image"></div>
              <div className="textforcart">
                <div className="">
                  <h1 className="name">{name}</h1>
                  <p>₦{price}</p>
                </div>
                <div className="">
                <button className="addtocartmain"><img src={add} alt="" className="add"/>Add to Cart <div className="count">{count}</div></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Jollof
