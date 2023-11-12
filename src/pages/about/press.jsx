import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../../styles/pages/about/press.css";

import titleLeft from "../../assets/about/press/titleLeft.png";
import titleRight from "../../assets/about/press/titleRight.png";
import button from "../../assets/mainPage/button.png";

import forbs from "../../assets/about/press/Forbes.png";
import Medium from "../../assets/about/press/Medium.png";
import Observer from "../../assets/about/press/Observer.png";
import Paste from "../../assets/about/press/Paste.png";
import Pimp from "../../assets/about/press/Pimp.png";
import Uproxx from "../../assets/about/press/Uproxx.png";

export default function Press() {
  const pressCards = [
    {
      img: forbs,
      text: "“Movie buffs will appreciate the colorful, B-movie poster styled labels and cinematically themed expressions from Filmland. Delicious, and the over-the-top label makes the bottle look great on any bar cart.”",
    },
    {
      img: Medium,
      text: "“Movie buffs will appreciate the colorful, B-movie poster styled labels and cinematically themed expressions from Filmland. Delicious, and the over-the-top label makes the bottle look great on any bar cart.”",
    },
    {
      img: Observer,
      text: "“Movie buffs will appreciate the colorful, B-movie poster styled labels and cinematically themed expressions from Filmland. Delicious, and the over-the-top label makes the bottle look great on any bar cart.”",
    },
    {
      img: Paste,
      text: "“Movie buffs will appreciate the colorful, B-movie poster styled labels and cinematically themed expressions from Filmland. Delicious, and the over-the-top label makes the bottle look great on any bar cart.”",
    },
    {
      img: Pimp,
      text: "“Movie buffs will appreciate the colorful, B-movie poster styled labels and cinematically themed expressions from Filmland. Delicious, and the over-the-top label makes the bottle look great on any bar cart.”",
    },
    {
      img: Uproxx,
      text: "“Movie buffs will appreciate the colorful, B-movie poster styled labels and cinematically themed expressions from Filmland. Delicious, and the over-the-top label makes the bottle look great on any bar cart.”",
    },
  ];

  return (
    <div className="press">
      <Navbar />

      <div className="content">
        <div className="title">
          <span>
            <img src={titleLeft} alt="titleLeft" />
          </span>

          <h1>Press & Reviews</h1>
          <span>
            <img src={titleRight} alt="titleRight" />
          </span>
        </div>

        <div className="press_cards">
          <div className="list">
            {pressCards.map((card, index) => (
              <div className="press_card">
                <div className="main_content">
                  <img src={card.img} alt="forbs" />

                  <p>{card.text}</p>
                </div>

                <div className="bottom_btn">
                  <img src={button} alt="btn" />

                  <a href="/">Read More</a>

                  <img src={button} alt="btn" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
