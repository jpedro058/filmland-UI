import Footer from "../../components/footer";
import Navbarv2 from "../../components/navbarv2";
import "../../styles/pages/about/backstory.css";
import "../../styles/components/slider.css";
import { useState, useEffect } from "react";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import story1 from "../../assets/about/backstory/story1.webp";
import story2 from "../../assets/about/backstory/story2.webp";
import story3 from "../../assets/about/backstory/story3.webp";
import story4 from "../../assets/about/backstory/story4.webp";
import story5 from "../../assets/about/backstory/story5.webp";
import story6 from "../../assets/about/backstory/story6.webp";
import eye from "../../assets/about/backstory/eye.png";

export default function Backstory() {
  const slides = [
    {
      id: 1,
      img: story1,
      topText: [
        "FADE IN:",
        "INT. MOVIE THEATER - 1976",
        "A 6 year-old boy, TROY BOLOTNICK, stares in wonder at the sci-fi action of LOGAN'S RUN as it plays on the silver screen.",
      ],
      middleText: [
        ["TROY", "(Whispers to Himself)", "I want to write movies one day…"],
        [
          "TROY",
          "Make our own whiskey. The art, the science. No one is more passionate about this. No one geeks out more about this.",
        ],
        ["TROY", "(Whispers to Himself)", "I want to write movies one day…"],
        ["CHARLIE", "Be a tour guide?"],
      ],
      bottomText: ["CUT TO:"],
    },
    {
      id: 2,
      img: story2,
      topText: [
        "INT. DISTILLERY PRODUCTION FLOOR - 2015",
        "A now adult Troy and his best friend of 20 years, CHARLIE FLINT, follow a TOUR GUIDE.",
      ],
      middleText: [
        ["TROY", "We can do this you know…"],
        ["CHARLIE", "Be a tour guide?"],
        [
          "TROY",
          "Make our own whiskey. The art, the science. No one is more passionate about this. No one geeks out more about this.",
        ],
        ["TROY", "(Whispers to Himself)", "I want to write movies one day…"],
        ["CHARLIE", "Let's do it."],
      ],
      bottomText: ["DISSOLVE TO:"],
    },
    {
      id: 3,
      img: story3,
      topText: [
        "EXT. SUBURBAN BACKYARD - 2020",
        "Troy sits with RICK DUKHOVNY at a patio table. Computers and stacks of research cover its surface.",
      ],
      middleText: [
        [
          "TROY",
          "The brand has to be special. Unique. Stand out. But it has to be genuine. True to who we are.",
        ],
        [
          "RICK",
          "Forget about what you think you should do, what you think people want. What are you passionate about? What do you want?",
        ],
        [
          "TROY",
          "I love writing, the movies and I love whiskey. I'm a movie geek and a whiskey nerd. But how do we combine those?",
        ],
        ["Troy and Rick smile confidently…"],
      ],
      bottomText: ["WIPE TO:"],
    },
    {
      id: 4,
      img: story4,
      topText: [
        "INT. ORANGE COUNTY SUBURBAN HOME - MORNING",
        "BABY MCFLY a COCKATIEL lands on the shoulder of KRISTIN KILLPACK - wine and spirits sales guru.",
      ],
      middleText: [
        [
          "KRISTIN",
          "Guys, I'll be honest - I'm only taking this meeting as a favor to my friend who's considering investing. I'm sure you're nice people, but the world needs another bourbon brand about as much as it needs more Zumba instructors.",
        ],
        ["Baby McFly whistles in agreement and pecks at Kristin's hair."],
        ["INT. ORANGE COUNTY SUBURBAN HOME - 35 MINUTES LATER"],
        ["Troy and Rick smile confidently…"],
        ["KRISTIN", "Oh hell yeah - I'm in!"],
      ],
      bottomText: ["DISSOLVE TO:"],
    },
    {
      id: 5,
      img: story5,
      topText: [
        "EXT - LA SUSHI RESTAURANT - DAY",
        "The Filmland team sits at a sidewalk table with DANIEL CLARKE",
        "- smiling, debonair, exudes British charm.",
      ],
      middleText: [
        [
          "DANIEL",
          "Well, to be honest, I really quite like it. It's unique, risky, but there's certainly nothing out there like it.",
        ],
        ["TROY", "We've been told you know great brands. Interested…?"],
        ["DANIEL", "What's your marketing budget?"],
        ["TROY", "What should it be?"],
        ["DANIEL", "How long's a piece of string?"],
        ["Daniel and Troy smile. A hint of mutual respect."],
      ],
      bottomText: ["DISSOLVE TO:"],
    },
    {
      id: 6,
      img: story6,
      topText: [
        "INT. ZOOM MEETING",
        "Troy, Rick, Charlie, Kristin and Daniel share the screen. This crew of whiskey enthusiasts, movie buffs, spirits experts and storytellers set out on a mission to bring people together through captivating tales and great tasting spirits.",
      ],
      middleText: [
        [
          "TROY",
          "The brand has to be special. Unique. Stand out. But it has to be genuine. True to who we are.",
        ],
        [
          "RICK",
          "Forget about what you think you should do, what you think people want. What are you passionate about? What do you want?",
        ],
        [
          "TROY",
          "I love writing, the movies and I love whiskey. I'm a movie geek and a whiskey nerd. But how do we combine those?",
        ],
        ["Troy and Rick smile confidently…"],
      ],
      bottomText: ["THE BEGINNING"],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 6);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      if (currentSlide === 0) {
        setCurrentSlide(2);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    } else {
      if (currentSlide === 5) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  return (
    <div className="backstory">
      <Navbarv2 />

      <div className="content">
        <h3>The Backstory</h3>

        <div className="slider-container">
          <div className="slider">
            <div className="swipper_iconsL">
              <BsArrowLeftCircle
                onClick={() => handleSwipe("left")}
                className="left-arrow"
              />
            </div>
            {slides.map((slide, index) => (
              <div
                className="slide"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="inner_slide" key={slide.id}>
                  <img src={slide.img} alt="" />
                  <div className="slide_text">
                    <div className="firts_text">
                      {slide.topText.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </div>
                    {slide.middleText.map((middleTextSet, middleTextIndex) => (
                      <div className="middle_text" key={middleTextIndex}>
                        {middleTextSet.map((text, textIndex) => (
                          <p key={textIndex}>{text}</p>
                        ))}
                      </div>
                    ))}
                    <div className="final_text">
                      {slide.bottomText.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </div>
                  </div>
                  <div className="slide_bottom">
                    <a href="/process">
                      <img src={eye} alt="" />
                      <p>Up next</p>
                      <span>
                        Process
                        <BsArrowRightCircle />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div className="swipper_iconsR">
              <BsArrowRightCircle
                onClick={() => handleSwipe("right")}
                className="right-arrow"
              />
            </div>
          </div>

          <div className="slider-navigation">
            {slides.map((slide, index) => (
              <div
                className={`slider-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => handleSlideChange(index)}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
