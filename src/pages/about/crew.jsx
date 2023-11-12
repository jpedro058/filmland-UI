import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../../styles/pages/about/crew.css";
import { BsArrowRightCircle } from "react-icons/bs";

import prof1 from "../../assets/about/crew/prof1.webp";
import prof2 from "../../assets/about/crew/prof2.webp";
import prof3 from "../../assets/about/crew/prof3.webp";
import prof4 from "../../assets/about/crew/prof4.webp";
import prof5 from "../../assets/about/crew/prof5.webp";
import prof6 from "../../assets/about/crew/prof6.webp";

import bottomWing from "../../assets/mainPage/bottomWing.png";
import monster from "../../assets/about/crew/bottomLink.png";

export default function Crew() {
  const profCards = [
    {
      name: "Troy Bolotnick",
      title: "The Creative Crusader",
      img: prof1,
      desc: "A serial entrepreneur and Hollywood veteran, Troy was bitten by a radioactive bug - the Whiskey Bug! Now compelled by his obsession for storytelling and spirits, Troy must lead his not-so ragtag band of hooch heroes to conquer the world of adult beverages!!",
    },
    {
      name: "CHARLIE FLINT",
      title: "Master of the Mystical Ops",
      img: prof2,
      desc: "A jack-of-all-trades with experience in logistics, operations, sales and even screenwriting, Charlie draws from his mysterious bag-of-tricks, fighting his way through barrel selections, packaging decisions and bottling efforts to manifest his dream into reality!",
    },
    {
      name: "KRISTIN KILLPACK",
      title: "Captain Convincing",
      img: prof3,
      desc: "Rising from humble New Jersey roots to become a Spirits Industry Titan, Kristin has an unstoppable power - the Power to Sell!  Wielding her decades of sales & distribution expertise like Achilles' Shield, she fights a never ending battle to put Filmland Spirits into every bar and store in America!",
    },
    {
      name: "DANIEL R. CLARKE",
      title: "International Man of Mystery",
      img: prof4,
      desc: "Worldly, debonair and with a suave British accent to boot, Daniel covertly traverses the planet, leveraging a decade of marketing success - and a lifetime of sophisticated cool - to turn our up-and-coming brand into a global powerhouse!",
    },
    {
      name: "RICK DUKHOVNY",
      title: "The Ideator",
      img: prof5,
      desc: "While deep in meditation at a secluded Tibetan monastery, Rick inadvertently unlocked his Anja chakra, unleashing unlimited access to intuition & imagination.  Leveraging this - his third eye - he eternally  seeks out new big ideas, bringing Filmland's own brand of spirit-uality to the world.",
    },
    {
      name: "STEVE CANEPA",
      title: "The Whiskey Baron",
      img: prof6,
      desc: "A former captain of industry, Steve traded in his suit and tie - and 30+ years in big oil and biotech- to allow his alter-ego as the Big Daddy of Whiskey to emerge.  Armed with a supernatural spreadsheet, he fiercely protects the P&L, ensuring profits don't topple... all while enjoying a tipple.",
    },
  ];
  return (
    <div className="crew">
      <Navbar />

      <div className="content">
        <div className="title">
          <h1>THE LIBATIONS LEAGUE</h1>
          <img src={bottomWing} alt="bottomWing" />
        </div>
        <div className="prof_cards">
          {profCards.map((profCard) => (
            <div class="prof_card">
              <div class="prof_card_inner">
                <div class="prof_card_front">
                  <div className="prof_pic">
                    <img src={profCard.img} alt="" />
                  </div>
                  <h3>{profCard.name}</h3>
                  <span>{profCard.title}</span>
                </div>
                <div class="prof_card_back">
                  <h3>{profCard.name}</h3>
                  <span> {profCard.title}</span>
                  <p>{profCard.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bottomLink">
          <a href="/process">
            <img src={monster} alt="" />
            <p>Up next</p>
            <div className="text">
              <p>
                Moonlight Mahyem!
                <br />
                Straight Bourbon Whiskey
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
