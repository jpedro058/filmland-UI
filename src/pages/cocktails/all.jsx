import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

import "../../styles/pages/cocktails/all.css";

import wing from "../../assets/cocktails/all/wing.png";

import blue_door_open from "../../assets/cocktails/all/blue_door_open.webp";
import blue_door_close from "../../assets/cocktails/all/blue_door_close.webp";

import white_door_close from "../../assets/cocktails/all/white_door_close.webp";
import white_door_open from "../../assets/cocktails/all/white_door_open.webp";

export default function CocktailsAll() {
  const cocktailsData = [
    {
      openDoor: blue_door_open,
      closeDoor: blue_door_close,
      aClassName: "blue_door",
      link: "/cocktailsBourbon",
      imgOpenClassName: "blue_door_open",
      imgCloseClassName: "blue_door_close",
      button: "Bourbon Cocktails",
    },
    {
      openDoor: white_door_open,
      closeDoor: white_door_close,
      aClassName: "white_door",
      link: "/cocktailsRye",
      imgOpenClassName: "white_door_open",
      imgCloseClassName: "white_door_close",
      button: "Rye Cocktails",
    },
  ];

  return (
    <div className="cocktailsAll">
      <Navbar />

      <div className="content">
        <div className="title">
          <h2>Cocktails</h2>

          <img src={wing} alt="wing" />

          <p>Choose a Bar. Settle in. Mix yourself a drink.</p>
        </div>

        <div className="doors">
          {cocktailsData.map((cocktail) => (
            <div className="door">
              <a href={cocktail.link} className={cocktail.aClassName}>
                <img
                  src={cocktail.openDoor}
                  alt="blue_door_open"
                  className={cocktail.imgOpenClassName}
                />

                <img
                  src={cocktail.closeDoor}
                  alt="blue_door_close"
                  className={cocktail.imgCloseClassName}
                />
              </a>

              <div className="bottom_content">
                <a className="bottom_link" href={cocktail.link}>
                  {cocktail.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
