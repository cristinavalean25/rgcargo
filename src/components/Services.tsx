import { FormattedMessage } from "react-intl";
import "../CssPages/Services.css";
import img1 from "../Images/truck-3.jpg";
import img2 from "../Images/truck-4.jpg";
import img3 from "../Images/truck-2.png";
import img4 from "../Images/truck-3.jpg";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

interface ServiceProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Services: React.FC<ServiceProps> = ({ changeLanguage, locale }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const images = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
  ];
  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />

      <Carousel
        interval={2000}
        style={{ paddingBottom: "2%" }}
        controls={false}
        indicators={false}
        fade
        onSelect={handleSlideChange}
      >
        {images.map((image, _) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100 height-80vh img-fluid custom-img"
              src={image.imgSrc}
              alt={`Slide ${image.id}`}
            />
            <div className="carousel-caption-2">
              <motion.h2
                key={`text-${image.id}-${currentSlide}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <FormattedMessage id="template.title1" />
              </motion.h2>
              <div className="carousel-text">
                <hr className="separator-line" />
                <h5 style={{ lineHeight: 2.5 }}>
                  <FormattedMessage id="template.title2" />
                </h5>
                <a href="/contact" className="btn btn-info custom-btn">
                  <FormattedMessage id="navbar.cotatie" />
                </a>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container-template-services">
        <div className="template-services">
          <span className="separator-span"></span>
          <div className="template-services-content">
            <h2 className="title-template">Our Services</h2>
            <h4 className="text-template">The focus of our company is on:</h4>

            <ul className="bullet-list">
              <li>
                {" "}
                <FormattedMessage id="transport.title" />
              </li>
              <li>
                <FormattedMessage id="transport-animale.title" />,
              </li>
              <li>
                <FormattedMessage id="transport.frigo.title" />
              </li>
              <li>
                <FormattedMessage id="transport.masini.title" />
              </li>
            </ul>

            <p className="text-details">
              <FormattedMessage id="template.descriere" />
            </p>
            <p className="text-details">
              <FormattedMessage id="template.descriere1" />
            </p>
            <p className="text-details">
              <FormattedMessage id="template.descriere2" />
            </p>
            <p className="text-details">
              <FormattedMessage id="template.descriere3" />
            </p>
            <p className="text-details">
              <FormattedMessage id="template.descriere4" />
            </p>
          </div>
        </div>
      </div>
      <Footer changeLanguage={changeLanguage} locale={locale} />
    </>
  );
};

export default Services;
