import React from "react";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import truck from "../Images/animals-truck.png";
import { motion, Variants } from "framer-motion";
import "../index.css";

interface TransportProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const TransportAnimale: React.FC<TransportProps> = ({
  changeLanguage,
  locale,
}) => {
  const textVariants: Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 5, delay: 0.5 },
    },
  };

  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />

      <div className="container-fluid" style={{ position: "relative" }}>
        <motion.div className="img-container">
          <img
            src={truck}
            alt="Animal Truck"
            className="img-fluid"
            style={{ height: "75vh", width: "100%" }}
          />
          <motion.div
            className="overlay-text-animals"
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={textVariants}>
              Your national & international
            </motion.h2>
            <motion.p variants={textVariants}>ANIMAL TRANSPORT</motion.p>
            <motion.p variants={textVariants}>COMPANY</motion.p>
          </motion.div>
        </motion.div>
      </div>

      <div className="container-box">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="container-box-details">
              <div className="container-content">
                <div></div>
                <h3>Text Container 1</h3>
                <p>Text pentru container 1</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="container-box-details">
              <div className="container-content">
                <h3>Text Container 2</h3>
                <p>Text pentru container 2</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="container-box-details">
              <div className="container-content">
                <h3>Text Container 3</h3>
                <p>Text pentru container 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportAnimale;
