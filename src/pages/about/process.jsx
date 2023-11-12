import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../../styles/pages/about/process.css";

import card1 from "../../assets/about/process/card1.jpg";
import card2 from "../../assets/about/process/card2.jpg";
import card3 from "../../assets/about/process/card3.jpg";
import card4 from "../../assets/about/process/card4.jpg";

import eye from "../../assets/about/process/eye.png";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Process() {
  const process_cards = [
    {
      bg_img: card1,
      front: "FLIP THE SCRIPT",
      back: "We start with a script. In our case, it's a recipe. We use the finest grains, yeast, and water to create the perfect mash bill.",
    },
    {
      bg_img: card2,
      front: "SET THE SCENE",
      back: "We craft our story based on an original B-movie concept, with heroes, villains and a plot that keeps your mouth watering.",
    },
    {
      bg_img: card3,
      front: "PAN AND SCAN",
      back: "Our spirits are masterfully distilled, blended to perfection then bottled “on location” in the USA.",
    },
    {
      bg_img: card4,
      front: "IT'S A WRAP",
      back: "We wrap each story around a bottle featuring an original B-movie poster label in pulp-style art, to create an instant classic.",
    },
  ];

  return (
    <div className="process">
      <Navbar />

      <div className="content">
        <div className="header">
          <h1>CRAFTED WITH A MOVIE MAKING MINDSET</h1>
          <p>
            For us, producing great whiskey is like making an unforgettable
            movie. Start with a killer script. Gather all the best ingredients
            and craftspeople and blend them together in just the right way to
            create something truly unique.
          </p>
        </div>

        <div className="process_cards">
          {process_cards.map((card, index) => (
            <div
              className="process_card"
              key={index}
              style={{ backgroundImage: `url(${card.bg_img})` }}
            >
              <div className="front_content">
                <p>{card.front}</p>
              </div>
              <div className="back_content">
                <p>{card.back}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bottomLink">
          <a href="/crew">
            <img src={eye} alt="" />
            <p>Up next</p>
            <div className="text">
              <p>CREW</p>
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
