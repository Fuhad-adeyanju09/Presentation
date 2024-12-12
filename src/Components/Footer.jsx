import Socials from './Socials'


const Footer = () => {
  return (
    <>
        <footer>
              <div className="up">
                <div className="disclaimer">
                  <h1>Disclaimer</h1>
                  <p>Do not honour any request for payment to any <br />personal account. Contact us if you suspect any <br /> fraudulent activity or intention.</p>
                  <h2 className='meet'>Meet Us On</h2>
                  <Socials/>
                </div>
                <div className="reach">
                  <h1>Reach Us</h1>
                  <p>+234 7049294736</p>
                  <p>+234 8038064670</p>
                </div>
                <div className="email">
                  <h1>Email</h1>
                  <p>adeyanjufuhad@gmail.com</p>
                </div>
                <div className="links">
                  <h1>Links</h1>
                  <ul>
                    <li>Our Brands</li>
                    <li>Recipes</li>
                    <li>Contact Us</li>
                    <li>Corporate</li>
                    <li>Careers</li>
                    <li>The Board</li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="down">
                <p>© 2024 FOODLAND Plc. All rights Reserved | Privacy Policy | Cookies Policy | Events Terms & Conditions</p>
              </div>
        </footer>
    </>
  )
}

export default Footer
