import { FormattedMessage } from "react-intl";
import "../index.css";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import ImgTruck from "../Images/black-truck-1.jpg";
import Footer from "./Footer";

interface TransportProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const TransportMarfa: React.FC<TransportProps> = ({
  changeLanguage,
  locale,
}) => {
  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <div>
        <img src={ImgTruck} alt="Truck" className="img-fluid img-transport" />
      </div>
      <div className="container-fluid container-details">
        <div className="row">
          <div className="col-md-6">
            <img src={ImgTruck} className="img-fluid img-transport" />
          </div>

          <div className="col-md-6 text-transport">
            <h2>
              <FormattedMessage id="transport.title" />
            </h2>
            <p className="transport-paragraph">
              <FormattedMessage id="transport.marfa" />
              <FormattedMessage id="transport1.marfa" />
            </p>
            <p className="transport-paragraph">
              <FormattedMessage id="transport2.marfa" />
              <FormattedMessage id="transport3.marfa" />
            </p>
          </div>
          <div>
            <p className="transport-paragraph">
              <FormattedMessage id="transport4.marfa" />
              <FormattedMessage id="transport5.marfa" />
            </p>
          </div>
          <div>
            <p className="transport-paragraph">
              <FormattedMessage id="transport6.marfa" />
            </p>
          </div>
        </div>
      </div>
      <Footer changeLanguage={changeLanguage} locale={locale} />
    </>
  );
};

export default TransportMarfa;
