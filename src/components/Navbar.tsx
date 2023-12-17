import { Link } from "react-router-dom";
import Logo from "../Images/RG-01.png";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

interface NavbarProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({ changeLanguage, locale }) => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleLanguageOptionClick = (code: string) => {
    setIsLanguageMenuOpen(false);
    changeLanguage(code);
  };

  const languageOptions = [
    { code: "en", label: "EN" },
    { code: "ro", label: "RO" },
    { code: "de", label: "DE" },
    { code: "tr", label: "TR" },
    { code: "pl", label: "PL" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="collapse navbar-collapse me-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FormattedMessage id="navbar.home" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Services" className="nav-link">
                  <FormattedMessage id="navbar.services" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  <FormattedMessage id="navbar.contact" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CryptoPay" className="nav-link">
                  <FormattedMessage id="navbar.Crypto" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <button
              className="btn btn-secondary"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded={isLanguageMenuOpen}
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              {locale}
            </button>
            <Dropdown.Menu show={isLanguageMenuOpen} align="end">
              {languageOptions.map((option) => (
                <Dropdown.Item
                  key={option.code}
                  onClick={() => handleLanguageOptionClick(option.code)}
                >
                  {option.code}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </div>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
