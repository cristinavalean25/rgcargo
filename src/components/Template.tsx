import Img1 from "../Images/transport.jpg";
import Img2 from "../Images/black-truck(2).jpg";
import Img3 from "../Images//black-truck-1.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../CssPages/Template.css";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import { useState } from "react";

function Template() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const images = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
  ];

  return (
    <>
      <Carousel
        interval={5000}
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
    </>
  );
}

export default Template;
