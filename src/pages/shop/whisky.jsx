import "../../styles/pages/shop/whisky.css";

import wing from "../../assets/cocktails/all/wing.png";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import reaysOfRobotsExtended from "../../assets/mainPage/raysoftherobotsExtend.webp";
import towntomorrow from "../../assets/mainPage/towntomorrow.webp";

import goldMedal from "../../assets/mainPage/goldMedal.webp";
import doubleGoldMedal from "../../assets/mainPage/doubleGoldMedal.webp";

import moonlight from "../../assets/mainPage/moonlight.webp";
import moonlightMayhem from "../../assets/mainPage/moonlightMayhem.webp";
import ryesoftherobots from "../../assets/mainPage/ryesoftherobots.webp";
import JoinList from "../../components/joinList";

export default function Whisky() {
  const top_wiskies = [
    {
      bottle: reaysOfRobotsExtended,
      mainTitle: "RYES OF THE ROBOTS EXTENDED CUT",
      title: "SMALL BATCH STRAIGHT RYE WHISKEY",
      subtitle: "SAVE 10% WITH CODE BOO10",
      price: "$59.99",
    },
    {
      bottle: towntomorrow,
      mainTitle: "TOWN AT THE END OF TOMORROW",
      title: "KENTUCKY STRAIGHT BOURBON AGED 9 YEARS",
      subtitle: "LIMITED RELEASE",
      price: "$109.99",
    },
  ];

  const bottom_wiskies = [
    {
      bottle: ryesoftherobots,
      mainTitle: "RYES OF THE ROBOTS",
      title: "CASK STRENGTH STRAIGHT RYE WHISKEY",
      subtitle: "SAVE 10% WITH CODE BOO10",
      medalImg: goldMedal,
      medal: "Gold Medal Winner",
      price: "$59.99",
    },
    {
      bottle: moonlightMayhem,
      mainTitle: "MOONLIGHT MAYHEM!",
      title: "SMALL BATCH STRAIGHT BOURBON",
      subtitle: "SAVE 10% WITH CODE BOO10",
      medalImg: doubleGoldMedal,
      medal: " Double Gold Medal Winner",
      price: "$54.99",
    },
    {
      bottle: moonlight,
      mainTitle: "MOONLIGHT MAYHEM! EXTENDED CUT",
      title: "CASK STRENGTH STRAIGHT BOURBON",
      subtitle: "SAVE 10% WITH CODE BOO10",
      medalImg: goldMedal,
      medal: "Gold Medal Winner",
      price: "$79.99",
    },
  ];

  const list_items = [
    {
      title: "Ryes of the Robots",
      subtitle: "SMALL BATCH STRAIGHT RYE WHISKEY",
    },
    {
      title: "Ryes of the Robots Extended Cut",
      subtitle: "CASK STRENGTH STRAIGHT RYE WHISKEY",
    },
    {
      title: "Moonlight Mayhem! Extended Cut",
      subtitle: "CASK STRENGTH STRAIGHT BOURBON WHISKEY",
    },
    {
      title: "Moonlight Mayhem!",
      subtitle: "SMALL BATCH STRAIGHT BOURBON WHISKEY",
    },
  ];

  return (
    <div className="whisky">
      <Navbar />

      <div className="content">
        <div className="title">
          <p>Online shop</p>

          <h2>Spirits</h2>

          <img src={wing} alt="wing" />
        </div>

        <div className="bottles">
          {top_wiskies.map((whisky) => (
            <div className="whisky_card">
              <div className="whisky_card_img">
                <img src={whisky.bottle} alt="reaysOfRobotsExtended" />
              </div>

              <div className="whisky_card_info">
                <p>{whisky.mainTitle}</p>

                <p className="subtitle">{whisky.title}</p>

                <p className="sub_subtitle">{whisky.subtitle}</p>

                <p className="price">{whisky.price}</p>

                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bottomBottles">
          {bottom_wiskies.map((whisky) => (
            <div className="whisky_card">
              <div className="whisky_card_img">
                <img src={whisky.bottle} alt="reaysOfRobotsExtended" />
              </div>

              <div className="whisky_card_info">
                <p>{whisky.mainTitle}</p>

                <p className="subtitle">{whisky.title}</p>

                <p className="sub_subtitle">{whisky.subtitle}</p>

                <div className="medal">
                  <img src={whisky.medalImg} alt="goldMedal" />

                  <p>{whisky.medal}</p>
                </div>

                <p className="price">{whisky.price}</p>

                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="sellBottles">
          <div className="leftContent">
            <img src={ryesoftherobots} alt="ryesoftherobots" />
            <img src={reaysOfRobotsExtended} alt="reaysOfRobotsExtended" />
            <img src={moonlight} alt="moonlight" />
            <img src={moonlightMayhem} alt="moonlightMayhem" />
          </div>
          <div className="rightContent">
            <h3>Filmland Spirts Whisky Quad</h3>

            <p>
              Save $15 when you purchase the entire lineup. Experience each of
              our award-winning whiskeys and their captivating stores together.
            </p>

            <div className="list">
              {list_items.map((item) => (
                <div className="list_item">
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
              ))}
            </div>

            <div className="prices">
              <span className="old_price">$263.96</span>

              <span className="new_price">$248.96</span>

              <button>Add to cart</button>
            </div>
          </div>
        </div>

        <JoinList />
      </div>

      <Footer />
    </div>
  );
}
