import wing from "../../assets/cocktails/all/wing.png";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import "../../styles/pages/shop/merch.css";

import shirtRyes from "../../assets/shop/merch/FL-Tshirt-Ryes.png";
import shirtRyes02 from "../../assets/shop/merch/FL-Tshirt-Ryes-02.png";

import shirt from "../../assets/shop/merch/FL-Tshirt.png";
import shirt02 from "../../assets/shop/merch/FL-Tshirt-02.png";

import hat from "../../assets/shop/merch/FL-Hat.png";
import hat02 from "../../assets/shop/merch/FL-Hat-02.png";

import poster from "../../assets/shop/merch/FL-MoviePosters.png";
import poster02 from "../../assets/shop/merch/FL-MoviePosters-Ryes.png";

import glass from "../../assets/shop/merch/FL-Glass-01.png";
import glass02 from "../../assets/shop/merch/FL-Glass-02.png";

export default function Merch() {
  const merchData = [
    {
      img: shirtRyes,
      img2: shirtRyes02,
      title: "Ryes of the Robots Tee",
      price: "$25.00",
    },
    {
      img: shirt,
      img2: shirt02,
      title: "White Logo Tee",
      price: "$25.00",
    },
    {
      img: hat,
      img2: hat02,
      title: "Trucker Hat",
      price: "$30.00",
    },
    {
      img: poster,
      img2: poster02,
      title: "Filmland Spirits Movie Poster Trio",
      price: "$20.00",
    },
    {
      img: glass,
      img2: glass02,
      title: "Ryes of the Robots Tee",
      price: "$12.00",
    },
  ];

  return (
    <div className="merch">
      <Navbar />

      <div className="content">
        <div className="title">
          <p>Online shop</p>

          <h2>Merchandise</h2>

          <img src={wing} alt="wing" />
        </div>

        <div className="shop">
          {merchData.map((merch) => (
            <div className="sellcard">
              <div className="sellCard_img">
                <img src={merch.img} alt="shirt" className="img1" />
                <img src={merch.img2} alt="shirt-02" className="img2" />

                <button>Shop</button>
              </div>

              <p>{merch.title}</p>

              <span>{merch.price}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
