import { FormattedMessage } from "react-intl";
import carTrack from "../Images/car-truck.jpg";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

interface TransportProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const TransportMasini: React.FC<TransportProps> = ({
  changeLanguage,
  locale,
}) => {
  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <div className="container-fluid container-details">
        <div className="row">
          <div className="col-md-6">
            <img src={carTrack} className="img-fluid img-transport" />
          </div>

          <div className="col-md-6 text-transport">
            <h2>
              <FormattedMessage id="transport.masini.title" />
              <p style={{ marginTop: "10px" }}>
                {" "}
                <FormattedMessage id="transport.frigo.sub" />
              </p>
            </h2>

            <p className="transport-paragraph">
              <FormattedMessage id="transport.masini" />
            </p>
            <p className="transport-paragraph">
              <FormattedMessage id="transport.masini.1" />
            </p>
          </div>
          <div>
            <p className="transport-paragraph mt-2">
              <FormattedMessage id="transport.frigo.3" />
              <FormattedMessage id="transport.frigo.4" />
            </p>
          </div>
        </div>
      </div>
      <Footer changeLanguage={changeLanguage} locale={locale} />
    </>
  );
};

export default TransportMasini;
