import fud from '../images/FUD-removebg-preview.png'
import acc from '../images/account.svg'
import what from '../images/whatsapp.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="left">
            <img src={fud} alt=""  className='logo'/>
        </div>
        <div className="center">
            <ul>
                <div className="home">
                    <li>Home</li>
                    <span></span>
                </div>
                <div className="aboutus">
                    <Link to={'/aboutus'} style={{textDecoration:'none', color:'white'}}><li>About Us</li></Link>
                    <span></span>
                </div>
                <div className="menunav">
                    <Link to={'/ordernow'} style={{textDecoration:'none', color:'white'}}><li>Menu</li></Link>
                    <span></span>
                </div>
                <div className="contact">
                    <li>Contact Us</li>
                    <span></span>
                </div>
            </ul>
        </div>
        <div className="right">
            <Link to={'/ordernow'}><button>Order Now</button></Link>
            <img src={acc} alt="" width={'30px'}/>
            <img src={what} alt="" width={'30px'}/>
        </div>
    </nav>
    </>
  )
}

export default Nav
