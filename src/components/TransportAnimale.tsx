import React from "react";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import truck from "../Images/animals-truck.png";
import animals from "../Images/animals-res.jpg";
import truck2 from "../Images/animals-truck2-res.jpg";
import newTruck from "../Images/animals-truck-new-res.jpg";
import ferma from "../Images/ferma-animale.jpg";
import track1 from "../Images/truck-renault.png";
import "../CssPages/TransportAnimale.css";
import { FormattedMessage } from "react-intl";
import Footer from "./Footer";

interface TransportProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const TransportAnimale: React.FC<TransportProps> = ({
  changeLanguage,
  locale,
}) => {
  const imageArray = [
    { id: 1, src: truck, alt: "Truck 1" },
    { id: 2, src: animals, alt: "Animals" },
    { id: 3, src: truck2, alt: "Truck 2" },
    { id: 4, src: newTruck, alt: "New Truck" },
    { id: 5, src: ferma, alt: "Farm" },
    { id: 6, src: track1, alt: "Renault Truck" },
  ];

  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />

      <div className="container-fluid container-details">
        <div className="row">
          <div className="col-md-6">
            <img src={truck} className="img-fluid img-transport" />
          </div>

          <div className="col-md-6 text-transport">
            <h2>
              <FormattedMessage id="transport-animale.title" />
            </h2>
            <p className="transport-paragraph">
              <FormattedMessage id="transport-animals" />
            </p>
            <p className="transport-paragraph">
              <FormattedMessage id="transport-animale-1" />
            </p>
          </div>
          <div>
            <p className="transport-paragraph">
              <FormattedMessage id="transport-animale-2" />
              <FormattedMessage id="transport-animale-3" />
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

export default TransportAnimale;
