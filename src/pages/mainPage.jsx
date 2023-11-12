import "../styles/pages/mainpage.css";
import video from "../assets/mainPage/video.mp4";
import Navbar from "../components/navbar";
import bottomWing from "../assets/mainPage/bottomWing.png";
import button from "../assets/mainPage/button.png";

import reaysOfRobotsExtended from "../assets/mainPage/raysoftherobotsExtend.webp";
import newgreencoin from "../assets/mainPage/newgreencoin.webp";
import towntomorrow from "../assets/mainPage/towntomorrow.webp";
import newgoldcoin from "../assets/mainPage/newgoldcoin.webp";
import ryesoftherobots from "../assets/mainPage/ryesoftherobots.webp";
import blackNwhitedrink from "../assets/mainPage/blackNwhitedrink.webp";
import moonlight from "../assets/mainPage/moonlight.webp";
import moonlightMayhem from "../assets/mainPage/moonlightMayhem.webp";
import goldMedal from "../assets/mainPage/goldMedal.webp";
import doubleGoldMedal from "../assets/mainPage/doubleGoldMedal.webp";
import Sellcard from "../components/sellcard";
import Slider from "../components/slider";
import Footer from "../components/footer";

export default function MainPage() {
  const sellcardTop = [
    {
      bottle: reaysOfRobotsExtended,
      coin: newgreencoin,
      title: "Ryes of the the Robots extended cut cask strength rye whiskey",
      price: "$84.99",
      footer: "New Release",
    },
    {
      bottle: towntomorrow,
      coin: newgoldcoin,
      title:
        "Town at the end of tomorrow kentucky straight bourbon aged 9 years",
      price: "$109.99",
      footer: "New Release",
    },
  ];

  const sellcardBottom = [
    {
      bottle: ryesoftherobots,
      coin: goldMedal,
      title: "Ryes of the the Robots small batch straight rye whiskey",
      price: "$59.99",
      footer: "Gold Medal Winner",
    },
    {
      bottle: moonlight,
      coin: goldMedal,
      title:
        "Moonlight mayhem! Extended cut cask strength straight bourbon whiskey",
      price: "$79.99",
      footer: "Gold Medal Winner",
    },
    {
      bottle: moonlightMayhem,
      coin: doubleGoldMedal,
      title: "Moonlight mayhem! Small batch straight bourbon whiskey",
      price: "$54.99",
      footer: "Double Gold Medal Winner",
    },
  ];

  return (
    <div className="mainpage">
      <Navbar />

      <div className="homescreen">
        <div className="video">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="storys">
        <div className="title">
          <p>Storys you can drink</p>
        </div>
        <div className="content">
          Whiskey geeks and movie nerds. That's us. Welcome to Filmland Spirits,
          where we invite you to immerse yourself in our award-winning,
          great-tasting spirits and our original characters and stories.
        </div>
        <img src={bottomWing} className="bottomWing" alt="btmwing" />
        <div className="bottom_content">
          <span>
            <img src={button} alt="buttons" />
          </span>
          <a href="/">The Backstory</a>
          <span>
            <img src={button} alt="buttons" />
          </span>
        </div>
      </div>

      <div className="products">
        <h3>New Releases - Now Shipping</h3>

        <div className="content">
          <p>
            Two brand new whiskeys from the award-winning Filmland Spirits team
          </p>
        </div>

        <div className="cards">
          {sellcardTop.map((sellcard, index) => (
            <Sellcard
              key={index}
              bottle={sellcard.bottle}
              coin={sellcard.coin}
              title={sellcard.title}
              price={sellcard.price}
              footer={sellcard.footer}
            />
          ))}
        </div>

        <h3>New Releases - Now Shipping</h3>

        <div className="content">
          <p>
            Our craftsmanship and attention to detail are reflected in our
            lineup of award-winning spirits:
          </p>
        </div>

        <div className="cards">
          {sellcardBottom.map((sellcard, index) => (
            <Sellcard
              key={index}
              bottle={sellcard.bottle}
              coin={sellcard.coin}
              title={sellcard.title}
              price={sellcard.price}
              footer={sellcard.footer}
            />
          ))}
        </div>
      </div>
      <div className="types">
        <div className="types_content">
          <div className="types_contentleft_container">
            <div className="content_left">
              <img src={blackNwhitedrink} alt="blackNwhitedrink" />
            </div>
          </div>
          <div className="types_contentright_container">
            <div className="content_right">
              <h3>LIGHTS! SPIRITS! ACTION!</h3>

              <p>
                Each of our award-winning whiskies are 'produced on location's
                in Kentucky, USA and like our original movie concepts, they are
                sometimes outlandish and over-the top, but always classic and
                entertaining.
              </p>

              <span>DIM THE LIGHTS, GRAB A BOTTLE AND ENJOY THE SHOW.</span>
            </div>
          </div>
        </div>
        <div className="types_slider">
          <Slider />
        </div>
      </div>
      <div className="cocktail">
        <div className="cocktail_text">
          <h3>Sip the Scene</h3>

          <p>
            Be it an action-packed party or a romantic movie night in, set the
            right mood with one of our original cocktails.
          </p>

          <div className="bottom_content">
            <span>
              <img src={button} alt="buttons" />
            </span>
            <a href="/">Cocktails</a>
            <span>
              <img src={button} alt="buttons" />
            </span>
          </div>
        </div>
      </div>
      <div className="join_list">
        <div className="content">
          <h3>GET BEHIND-THE-SCENES ACCESS</h3>
          <p>
            Be the first to know about new product releases, original stories,
            and exclusive merchandise. Sign up to become a Filmlander!
          </p>

          <form action="submit">
            <input type="email" placeholder="Your Email" required />

            <button type="submit">Join the list</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
