/* backgrounds */
import swipperBg1 from "../assets/mainPage/swipperBg1.webp";
import swipperBg2 from "../assets/mainPage/swipperBg2.webp";
import swipperBg3 from "../assets/mainPage/swipperBg3.webp";
import swipperBg4 from "../assets/mainPage/swipperBg4.webp";
import swipperBg5 from "../assets/mainPage/swipperBg5.webp";
/* bottles */
import ryesoftherobots from "../assets/mainPage/ryesoftherobots.webp";
import moonlightMayhem from "../assets/mainPage/moonlightMayhem.webp";
import moonlight from "../assets/mainPage/moonlight.webp";
import raysoftherobotsExtend from "../assets/mainPage/raysoftherobotsExtend.webp";
import towntomorrow from "../assets/mainPage/towntomorrow.webp";
/* titles */
import ryesoftheRobotsTitle from "../assets/mainPage/ryesoftheRobotsTitle.webp";
import moonlightMayhemOriginalTitle from "../assets/mainPage/moonlightMayhemOriginalTitle.webp";
import moonlightMayhemTitle from "../assets/mainPage/moonlightMayhemTitle.webp";
import RyesExtendedCutTitle from "../assets/mainPage/RyesExtendedCutTitle.webp";
import TownTomorrowTitle from "../assets/mainPage/TownTomorrowTitle.webp";

import { useState, useEffect } from "react";
import "../styles/components/slider.css";
import Slide from "./slide";

export default function Slider() {
  const slides = [
    {
      titleImg: ryesoftheRobotsTitle,
      title: "STRAIGHT RYE WHISKEY",
      text: "Taking down an army of mechanized mixologists isn't for the faint of heart, but it's worth it if happy hour starts with this spicy & minty delight.",
      button: "Take a bite",
      buttonColor: "gold",
      bottle: ryesoftherobots,
      background: swipperBg1,
    },
    {
      titleImg: moonlightMayhemOriginalTitle,
      title: "STRAIGHT BOURBON WHISKEY",
      text: "Tommy Dawson isn't the only hero of our flagship bourbon. Sweet notes of cherry and citrus star in this epic tale of romance, passion and flesh munching children of the moon.",
      button: "Take a bite",
      buttonColor: "gold",
      bottle: moonlightMayhem,
      background: swipperBg2,
    },
    {
      titleImg: moonlightMayhemTitle,
      title: "CASK STRENGTH BOURBON",
      text: "Our Full Moon Proof bourbon keeps you on the edge of your seat as it takes you through twists and turns of cacao, leather, cherries and chocolate for a surprising finish you will never forget!",
      button: "Sink your teeth in",
      buttonColor: "#3498db",
      bottle: moonlight,
      background: swipperBg3,
    },
    {
      titleImg: RyesExtendedCutTitle,
      title: "CASK STRENGTH RYE WHISKEY",
      text: "Joss Piles is out for revenge and only you can stop him - with a little help from Courtney Winters and this Full Metal Proof dynamo  that is sure to  mobilize humans and robots alike.",
      button: "Save the world",
      buttonColor: "gray",
      bottle: raysoftherobotsExtend,
      background: swipperBg4,
    },
    {
      titleImg: TownTomorrowTitle,
      title: "9 YEAR OLD STRAIGHT BOURBON",
      text: "The Future Wants its Bourbon and so will you with this  this rare gem so perfectly aged, you'll want to travel back in time for more.",
      button: "Time travel",
      buttonColor: "gold",
      bottle: towntomorrow,
      background: swipperBg5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 5);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <Slide
            titleImg={slides[0].titleImg}
            title={slides[0].title}
            text={slides[0].text}
            button={slides[0].button}
            buttonColor={slides[0].buttonColor}
            bottle={slides[0].bottle}
            background={slides[0].background}
          />
        </div>
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="slide-content">
            <Slide
              titleImg={slides[1].titleImg}
              title={slides[1].title}
              text={slides[1].text}
              button={slides[1].button}
              buttonColor={slides[1].buttonColor}
              bottle={slides[1].bottle}
              background={slides[1].background}
            />
          </div>
        </div>
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="slide-content">
            <Slide
              titleImg={slides[2].titleImg}
              title={slides[2].title}
              text={slides[2].text}
              button={slides[2].button}
              buttonColor={slides[2].buttonColor}
              bottle={slides[2].bottle}
              background={slides[2].background}
            />
          </div>
        </div>
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="slide-content">
            <Slide
              titleImg={slides[3].titleImg}
              title={slides[3].title}
              text={slides[3].text}
              button={slides[3].button}
              buttonColor={slides[3].buttonColor}
              bottle={slides[3].bottle}
              background={slides[3].background}
            />
          </div>
        </div>
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="slide-content">
            <Slide
              titleImg={slides[4].titleImg}
              title={slides[4].title}
              text={slides[4].text}
              button={slides[4].button}
              buttonColor={slides[4].buttonColor}
              bottle={slides[4].bottle}
              background={slides[4].background}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          .slider-navigation {
            position: absolute;
            bottom: 15px;
            left: 50%;
          }
        `}
      </style>

      <div className="slider-navigation">
        <div
          className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
          onClick={() => handleSlideChange(0)}
        ></div>
        <div
          className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
          onClick={() => handleSlideChange(1)}
        ></div>
        <div
          className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
          onClick={() => handleSlideChange(2)}
        ></div>
        <div
          className={`slider-dot ${currentSlide === 3 ? "active" : ""}`}
          onClick={() => handleSlideChange(3)}
        ></div>
        <div
          className={`slider-dot ${currentSlide === 4 ? "active" : ""}`}
          onClick={() => handleSlideChange(4)}
        ></div>
      </div>
    </div>
  );
}
