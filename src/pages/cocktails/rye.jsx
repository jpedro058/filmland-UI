import Footer from "../../components/footer";
import Navbar from "../../components/navbarv2";

import "../../styles/pages/cocktails/rye.css";

import title_drink from "../../assets/cocktails/rye/title_img.png";
import firt_img from "../../assets/cocktails/rye/first_img.png";
import second_img from "../../assets/cocktails/rye/second_img.png";
import third_img from "../../assets/cocktails/rye/third_img.png";

import LinkImg from "../../assets/cocktails/rye/link_img.png";
import { BsArrowRightCircle } from "react-icons/bs";

export default function CocktailRye() {
  const cocktails = [
    {
      id: 1,
      name: "MECHANIZED MANHATTAN",
      description:
        "Ryes of the Robots Straight Rye Whiskey, Amaro, Orange Bitters, Angostura Bitters",
      img: firt_img,
      imgStyle: { left: "70%", top: "-100px", width: "120px" },
    },
    {
      id: 2,
      name: "ROBOT SMASH",
      description:
        "Ryes of the Robots Straight Rye Whiskey, Fernet Branca, Maple Syrup, Demerara Simple, Lemon Slices, Mint",
      img: second_img,
      imgStyle: { left: "15%", top: "-60px", width: "190px" },
    },
    {
      id: 3,
      name: "CONSORTIUM SOUR",
      description:
        "Ryes of the Robots Straight Rye Whiskey, Lemon, Simple, Egg White",
      img: third_img,
      imgStyle: { left: "70%", top: "-100px", width: "150px" },
    },
  ];

  return (
    <div className="CocktailRye">
      <Navbar />

      <div className="content">
        <div className="main_img">
          <div className="inside_content">
            <img src={title_drink} alt="title_drink" />

            <h2>Rye Cocktails</h2>

            {cocktails.map((cocktail) => (
              <div className="cocktail_div">
                <a href="/">
                  <img
                    src={cocktail.img}
                    alt="img"
                    style={{
                      left: cocktail.imgStyle.left,
                      top: cocktail.imgStyle.top,
                      width: cocktail.imgStyle.width,
                    }}
                  />
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.description}</p>
                  <button>Recipe</button>
                </a>
              </div>
            ))}

            <div className="bottom_text_rye">
              <p>
                Cocktail Program designed by Executive Bartender Courtney L.
                Winters.
              </p>
              <p>
                This establishment managed in strict compliance with the
                Consortium Mixology Act of 3050, under the direct supervision
                and consent of Colonel J. Peachtree.
              </p>
            </div>
          </div>
        </div>

        <div className="bottomLink2">
          <a href="/cocktailsBourbon">
            <img src={LinkImg} alt="" />
            <p>Up next</p>
            <div className="text">
              <div className="text_title">
                <p>THE DEN</p>
                <p className="subtitle">BOURBON COCKTAILS</p>
              </div>
              <span>
                <BsArrowRightCircle />
              </span>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
