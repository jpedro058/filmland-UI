import "../styles/components/sellcard.css";

export default function Sellcard(props) {
  return (
    <div className="card">
      <div className="inner_card">
        <div className="bottle">
          <img src={props.bottle} alt="bottle" />
        </div>

        <div className="card_content">
          <img src={props.coin} alt="greencoin" />
          <p>{props.title}</p>
          <div>
            <span>{props.footer}</span>
          </div>
        </div>
      </div>

      <div className="bottom_content">
        <p>{props.price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
