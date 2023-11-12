import "../styles/components/navbar.css";
import logov2 from "../assets/mainPage/logov2.png";

import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logov2} alt="logo" />
        </a>
      </div>
      <div className="links">
        <ul>
          <li className="li_text">
            <div className="dropdown">
              <p style={{ color: "black" }}>
                Spirits <IoMdArrowDropdown />
              </p>

              <div className="dropdown-content">
                <a id="dropdown_text" href="/" style={{ color: "black" }}>
                  Straight Bourbon
                </a>

                <a id="dropdown_text" href="/" style={{ color: "black" }}>
                  Cask Strenght Bourbon
                </a>

                <a id="dropdown_text" href="/" style={{ color: "black" }}>
                  Aged Kentucky Bourbun
                </a>

                <a id="dropdown_text" href="/" style={{ color: "black" }}>
                  Straight Rye
                </a>

                <a id="dropdown_text" href="/" style={{ color: "black" }}>
                  Cask Straight Rye
                </a>
              </div>
            </div>
          </li>
          <li className="li_text">
            <div className="dropdown">
              <p style={{ color: "black" }}>
                Shop <IoMdArrowDropdown />
              </p>
              <div className="dropdown-content">
                <a id="dropdown_text" href="/whisky" style={{ color: "black" }}>
                  Whikey
                </a>

                <a
                  id="dropdown_text"
                  href="/store-locator"
                  style={{ color: "black" }}
                >
                  Store Locator
                </a>

                <a
                  id="dropdown_text"
                  href="/merchandise"
                  style={{ color: "black" }}
                >
                  Merch
                </a>
              </div>
            </div>
          </li>
          <li className="li_text">
            <div className="dropdown">
              <p style={{ color: "black" }}>
                Cocktails <IoMdArrowDropdown />
              </p>
              <div className="dropdown-content">
                <a
                  id="dropdown_text"
                  href="/cocktailsAll"
                  style={{ color: "black" }}
                >
                  All
                </a>

                <a
                  id="dropdown_text"
                  href="/cocktailsBourbon"
                  style={{ color: "black" }}
                >
                  Bourbon
                </a>

                <a
                  id="dropdown_text"
                  href="/cocktailsRye"
                  style={{ color: "black" }}
                >
                  Rye
                </a>
              </div>
            </div>
          </li>
          <li className="li_text">
            <div className="dropdown">
              <p style={{ color: "black" }}>
                About <IoMdArrowDropdown />
              </p>
              <div className="dropdown-content">
                <a
                  id="dropdown_text"
                  href="/backstory"
                  style={{ color: "black" }}
                >
                  Backstory
                </a>

                <a id="dropdown_text" href="/crew" style={{ color: "black" }}>
                  Crew
                </a>

                <a id="dropdown_text" href="/" style={{ color: "black" }}>
                  Process
                </a>

                <a id="dropdown_text" href="/" style={{ color: "black" }}>
                  Press
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
