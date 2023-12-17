import React from "react";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import frigo from "../Images/frigo-track-2.jpg";
import frigoTrack from "../Images/frigo-truck.jpeg";
import frigoTrack1 from "../Images/frigo-track-1.jpg";

import "../CssPages/TransportAnimale.css";
import { FormattedMessage } from "react-intl";
import Footer from "./Footer";

interface TransportProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const TransportFrigorific: React.FC<TransportProps> = ({
  changeLanguage,
  locale,
}) => {
  const imageArray = [
    { id: 1, src: frigo, alt: "Frigo 1" },
    { id: 2, src: frigoTrack, alt: "Frigo Track" },
    { id: 3, src: frigoTrack1, alt: "Frigo Track 1" },
  ];

  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <div className="container-fluid container-details">
        <div className="row">
          <div className="col-md-6">
            <img src={frigo} className="img-fluid img-transport" />
          </div>

          <div className="col-md-6 text-transport">
            <h2>
              <FormattedMessage id="transport.frigo.title" />
              <p style={{ marginTop: "10px" }}>
                {" "}
                <FormattedMessage id="transport.frigo.sub" />
              </p>
            </h2>

            <p className="transport-paragraph">
              <FormattedMessage id="transport.frigo.1" />
            </p>
            <p className="transport-paragraph">
              <FormattedMessage id="transport.frigo.2" />
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

      <div className="container-box">
        <div className="row">
          {imageArray.map((image) => (
            <div key={image.id} className="col-md-4 mb-3">
              <div className="container-box-details">
                <div className="container-content">
                  <img src={image.src} className="img-fluid" alt={image.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer changeLanguage={changeLanguage} locale={locale} />
    </>
  );
};

export default TransportFrigorific;
