import { Link } from 'react-router-dom';
import fud from '../images/FUD-removebg-preview.png'

const Nav2 = () => {
    let name = 'Fuhad';
  return (
    <>
    <nav>
        <div className="left">
            <img src={fud} alt=""  className='logo'/>
        </div>
        <div className="center">
            <ul>
                <div className="home">
                    <Link to={'/'} style={{color:'white', textDecoration:'none'}}><li>Home</li></Link>
                    <span></span>
                </div>
                <div className="aboutus">
                    <Link to={'/aboutus'} style={{color:'white', textDecoration:'none'}}><li>About</li></Link>
                    <span></span>
                </div>
                <div className="menunav">
                    <Link to={'/ordernow'} style={{color:'white', textDecoration:'none'}}><li>Menu</li></Link>
                    <span></span>
                </div>
                <div className="contact">
                    <li>Contact Us</li>
                    <span></span>
                </div>
            </ul>
        </div>
        <div className="right">
            <h1>Hi, {name}</h1>
        </div>
    </nav>
    </>
  )
}

export default Nav2
