import React from "react";
import "../CssPages/ImagesFirstPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import animals from "../Images/animals.jpg";
import scania from "../Images/scania.png";
import animalsTruck from "../Images/animals-truck-new.jpg";
import camionPrelata from "../Images/camion-prelata.jpg";

interface ImagesFirstPageProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const ImagesFirstPage: React.FC<ImagesFirstPageProps> = () => {
  return (
    <>
      <div className="images-services">
        <span className="separator-span"></span>
        <h2 className="title-images">An insight</h2>
      </div>
      <div className="first-container">
        <div className="images-container">
          <div className="row">
            <div className="col-lg-6 col-md-12 left-image">
              {/* Imaginea din stanga, mai mare */}
              <img
                src={animals}
                alt="Large Image"
                className="img-fluid first-image"
              />
            </div>

            <div className="col-lg-6 col-md-12 right-images">
              {/* Imaginea din dreapta sus, cu width de 500px */}
              <img
                src={scania}
                alt="Large Image"
                className="img-fluid img-scania"
              />

              {/* Imaginea mai mica, suprapusa peste cea de sus */}
              <img
                src={animalsTruck}
                alt="Small Image"
                className="img-fluid overlapping-image"
                style={{ width: "500px" }}
              />
            </div>

            {/* Imaginea de jos*/}
            <div className="col-12 bottom-image">
              <img
                src={camionPrelata}
                alt="Bottom Image"
                className="img-fluid camion"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 20 }}></div>
    </>
  );
};

export default ImagesFirstPage;
