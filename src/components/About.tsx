import { FormattedMessage } from "react-intl";
import "../CssPages/About.css";
import imgCargo from "../Images/truck-1.png";
import imganimal from "../Images/animals-truck.png";
import frigoCar from "../Images/frigo-car.jpg";
import carTruck from "../Images/car-truck.jpg";
import { Link } from "react-router-dom";

interface AboutProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="container-100">
      <div className="container-75">
        <span className="separator-span"></span>
        <h2 className="about-title">
          <FormattedMessage id="about.title" />
        </h2>
        <div className="rectangle-container">
          <Link to="/TransportMarfa" className="rectangle">
            <img src={imgCargo} alt="Image 1" />
            <div className="rectangle-title">
              <FormattedMessage id="transport.title" />
            </div>
            <div className="rectangle-description">
              <FormattedMessage id="transport.shortDescription" />
            </div>
          </Link>

          <Link to="/TransportAnimale" className="rectangle">
            <img
              src={imganimal}
              alt="Image 2"
              className="img-fluid rectangle-image"
            />
            <div className="rectangle-title">
              <FormattedMessage id="transport-animale.title" />
            </div>
            <div className="rectangle-description">
              <FormattedMessage id="transport-animale-shortDescription" />
            </div>
          </Link>

          <Link to="/TransportFrigorific" className="rectangle">
            <img src={frigoCar} alt="Image 3" />
            <div className="rectangle-title">
              <FormattedMessage id="transport.frigo.title" />
            </div>
            <div className="rectangle-description">
              <FormattedMessage id="transport.frigo.shortDescription" />
            </div>
          </Link>

          <Link to="/TransportMasini" className="rectangle">
            <img src={carTruck} alt="Image 4" />
            <div className="rectangle-title">
              <FormattedMessage id="transport.masini.title" />
            </div>
            <div className="rectangle-description">
              <FormattedMessage id="transport.masini.shortDescription" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
