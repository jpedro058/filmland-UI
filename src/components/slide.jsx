import button from "../assets/mainPage/button.png";
import "../styles/components/slider.css";

export default function Slide(props) {
  return (
    <div
      className="slide-content"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className="bottle">
        <img src={props.bottle} alt="" />
      </div>
      <div className="slide-content-container">
        <div className="slide-content-text">
          <img src={props.titleImg} alt="" />
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          <div className="bottom_content">
            <span>
              <img src={button} alt="buttons" />
            </span>
            <a
              href="/"
              style={{
                color: props.buttonColor,
              }}
            >
              {props.button}
            </a>
            <span>
              <img src={button} alt="buttons" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
