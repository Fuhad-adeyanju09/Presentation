import light from '../images/lighting.svg'
import phone from '../images/phone.svg'
import support from '../images/support.svg'


const Section2 = () => {
  return (
    <>
        <section className="section1">
            <div className="about">
                <div className="deliveryshadow">
                <div className="delivery">
                    <button><img src={light} alt="" width={'40px'}/></button>
                    <h1>Fast Delivery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Sit error perfe  <br />rendis neque sapiente non unde volupta <br />te mollitia, totam facilis, eos</p>
                </div>
                </div>
                <div className="deliveryshadow">
                <div className="delivery">
                    <button><img src={phone} alt="" width={'40px'}/></button>
                    <h1>Amazing App</h1>
                    <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Sit error perfe  <br />rendis neque sapiente non unde volupta <br />te mollitia, totam facilis, eos</p>
                </div>
                </div>
                <div className="deliveryshadow">
                <div className="delivery">
                    <button><img src={support} alt="" width={'40px'}/></button>
                    <h1>24/7 Support</h1>
                    <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Sit error perfe  <br />rendis neque sapiente non unde volupta <br />te mollitia, totam facilis, eos</p>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section2
