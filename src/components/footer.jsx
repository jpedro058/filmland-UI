import button from "../assets/mainPage/button.png";
import "../styles/components/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upper_container">
        <div className="partner">
          <h3>Partner with us</h3>
        </div>
        <div className="text">
          <p>
            Earn extra cash with your podcast, blog, website, and marketing
            campaigns, or simply share with your friends and family.
          </p>
        </div>
        <div className="bottom_content2">
          <div className="outline">
            <span>
              <img src={button} alt="buttons" />
            </span>
            <a href="/">Backstory</a>
            <span>
              <img src={button} alt="buttons" />
            </span>
          </div>
        </div>
      </div>
      <div className="footer_bottom_container">
        <div className="social">
          <div className="links">
            <p>Enjoy Responsibly</p>
            <p>©Filmland Spirits All Rights Reserved</p>
            <p>Contact Us</p>
            <p>Trade Portal</p>
            <p>Investment Opportunity</p>
          </div>
          <div className="social_networks">
            <p>Follow Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
