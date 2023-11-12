import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

import "../../styles/pages/cocktails/bourbon.css";

import topDrink from "../../assets/cocktails/bourbon/topDrink.png";
import firtsDrink from "../../assets/cocktails/bourbon/firtsDrink.png";
import secondDrink from "../../assets/cocktails/bourbon/secondDrink.png";
import thirdDrink from "../../assets/cocktails/bourbon/thirdDrink.png";
import fourthDrink from "../../assets/cocktails/bourbon/fourthDrink.png";
import LinkImg from "../../assets/cocktails/bourbon/LinkImg.png";

import { BsArrowRightCircle } from "react-icons/bs";

export default function CocktailBourbon() {
  const cocktails = [
    {
      id: 1,
      name: "OLD-FASHIONED MAYHEM",
      description:
        "Moonlight Mayhem! Straight Bourbon Whiskey, Demerara Simple Syrup, Angostura Bitters",
      img: firtsDrink,
    },
    {
      id: 2,
      name: "MAYHEM! MAI TAI",
      description:
        "Moonlight Mayhem! Straight Bourbon Whiskey, Lemon, Lime, Orgeat, Angostura Bitters",
      img: secondDrink,
    },
    {
      id: 3,
      name: "HOLLYWOOD BOULEVARD'IER",
      description:
        "Moonlight Mayhem! Extended Cut Cask Strength Bourbon, Campari, Sweet Vermouth",
      img: thirdDrink,
    },
    {
      id: 4,
      name: "BLACKBERRY BITE",
      description:
        "Moonlight Mayhem! Extended Cut Cask Strength Bourbon, Simple Syrup, Lemon, Club Soda, Blackberries",
      img: fourthDrink,
    },
  ];

  return (
    <div className="cocktailBourbon">
      <Navbar />

      <div className="content">
        <div className="main_img">
          <div className="inside_content">
            <img src={topDrink} alt="" />

            <h2>Bourbon Cocktails</h2>
            {cocktails.map((cocktail) => (
              <div className="cocktails" key={cocktail.id}>
                <div className="cocktail_img">
                  <a href="/">
                    <img src={cocktail.img} alt="firtsDrink" />
                  </a>
                </div>

                <div className="text">
                  <h4>{cocktail.name}</h4>

                  <p>{cocktail.description}</p>

                  <button>
                    <a href="/">Recipe</a>
                  </button>
                </div>
              </div>
            ))}

            <div className="bottom_text">
              <p>
                "Full Moon out? Don't get caught driving under the influence -
                ask one of our staff to call you a cab!“
              </p>
            </div>
          </div>
        </div>

        <div className="bottomLink2">
          <a href="/cocktailsRye">
            <img src={LinkImg} alt="" />
            <p>Up next</p>
            <div className="text">
              <p>
                THE CONSORTIUM COCKTAIL CLUB
                <br />
                RYE COCKTAILS
              </p>
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
