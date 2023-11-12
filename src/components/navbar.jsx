import "../styles/components/navbar.css";
import logo from "../assets/mainPage/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="links">
        <ul>
          <li className="li_text">
            <div className="dropdown">
              <p>
                Spirits <IoMdArrowDropdown />
              </p>

              <div className="dropdown-content">
                <a id="dropdown_text" href="/">
                  Straight Bourbon
                </a>

                <a id="dropdown_text" href="/">
                  Cask Strenght Bourbon
                </a>

                <a id="dropdown_text" href="/">
                  Aged Kentucky Bourbun
                </a>

                <a id="dropdown_text" href="/">
                  Straight Rye
                </a>

                <a id="dropdown_text" href="/">
                  Cask Straight Rye
                </a>
              </div>
            </div>
          </li>
          <li className="li_text">
            <div className="dropdown">
              <p>
                Shop <IoMdArrowDropdown />
              </p>
              <div className="dropdown-content">
                <a id="dropdown_text" href="/whisky">
                  Whikey
                </a>

                <a id="dropdown_text" href="/store-locator">
                  Store Locator
                </a>

                <a id="dropdown_text" href="/merchandise">
                  Merch
                </a>
              </div>
            </div>
          </li>
          <li className="li_text">
            <div className="dropdown">
              <p>
                Cocktails <IoMdArrowDropdown />
              </p>
              <div className="dropdown-content">
                <a id="dropdown_text" href="/cocktailsAll">
                  All
                </a>

                <a id="dropdown_text" href="/cocktailsBourbon">
                  Bourbon
                </a>

                <a id="dropdown_text" href="/cocktailsRye">
                  Rye
                </a>
              </div>
            </div>
          </li>
          <li className="li_text">
            <div className="dropdown">
              <p>
                About <IoMdArrowDropdown />
              </p>
              <div className="dropdown-content">
                <a id="dropdown_text" href="/backstory">
                  Backstory
                </a>

                <a id="dropdown_text" href="/crew">
                  Crew
                </a>

                <a id="dropdown_text" href="/process">
                  Process
                </a>

                <a id="dropdown_text" href="/press">
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
