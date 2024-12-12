import man from '../CardImages/man.jpeg'
import Nav2 from './Nav2';

const AboutUs = () =>{
  return(
    <>
    <Nav2/>
    <section className='chef'>
      <h1>About Us</h1>
      <div className="man">
        <img src={man} alt="" width={'300px'}/>
        <p>At Foodland, we believe food is more than just <br /> sustenance—it's a journey of flavors, <br />stories, and connections. Whether you’re a passionate <br /> home cook, a food enthusiast, or simply someone <br /> looking for a little culinary inspiration, <br /> you’ve found the perfect place.</p>
      </div>
    </section>
    </>
  );
}

export default AboutUs