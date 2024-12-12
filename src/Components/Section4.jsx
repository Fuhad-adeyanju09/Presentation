import { CardData1 } from "../Data/CardData1";
import add from "../images/add.svg";

const Section4 = () => {
  return (
    <section className="section4">
      <h1 className="ourdishes">Explore Our Top Dishes</h1>
      <span className="explorespan"></span>
      <div className="grid">
        {CardData1.map(({ id, image, info, name, price }) => (
          <div key={id} className="gridmenu">
            <div
              className="image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="text">
              <div className="text1">
                <h1 className="name">{name}</h1>
                <p className="info">{info}</p>
                <p className="price">₦{price}</p>
              </div>
              <div className="">
                <button className="addtocartmain"><img src={add} alt="" className="add"/>Add to Cart</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
