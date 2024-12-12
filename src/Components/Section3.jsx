import cup from '../images/cup.svg'
import dish from '../images/dish.svg'
import drinks from '../images/drink.svg'
import cake from '../images/cake.svg'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <>
    <section className="section3">
        <h1>Browse Our Menu</h1>
        <span className='menuspan'></span>
        <div className="menu">
            <div className="deliveryshadow">

            <div className="breakfast">
                <div className="cup"><img src={cup} alt="" /></div>
                <h1>Breakfast</h1>
                <p>inthe new era of technology <br /> we look in the future with certainty <br /> and pride for our life.   </p>
                <Link to={'/ordernow'} style={{textDecoration:'none', color:'white'}}><p className='explore'>Explore Menu</p></Link>
            </div>
        </div>
        <div className="deliveryshadow">
            <div className="maindishes">
                <div className="cup"><img src={dish} alt="" /></div>
                <h1>Main Dishes</h1>
                <p>inthe new era of technology <br /> we look in the future with certainty <br /> and pride for our life.   </p>
                <Link to={'/ordernow'} style={{textDecoration:'none', color:'white'}}><p className='explore'>Explore Menu</p></Link>
            </div>
        </div>
        <div className="deliveryshadow">
            <div className="drinks">
                <div className="cup"><img src={drinks} alt="" /></div>
                <h1>drinks</h1>
                <p>inthe new era of technology <br /> we look in the future with certainty <br /> and pride for our life.   </p>
                <Link to={'/ordernow'} style={{textDecoration:'none', color:'white'}}><p className='explore'>Explore Menu</p></Link>
            </div>
        </div>
        <div className="deliveryshadow">
            <div className="Desserts">
                <div className="cup"><img src={cake} alt="" /></div>
                <h1>Desserts</h1>
                <p>inthe new era of technology <br /> we look in the future with certainty <br /> and pride for our life.   </p>
                <Link to={'/ordernow'} style={{textDecoration:'none', color:'white'}}><p className='explore'>Explore Menu</p></Link>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Section3
