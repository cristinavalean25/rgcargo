import { useEffect } from "react";
import "../index.css";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

interface AboutProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const AboutUs: React.FC<AboutProps> = ({ changeLanguage, locale }) => {
  useEffect(() => {
    const textContainer = document.querySelector(".text-container");
    if (textContainer) {
      textContainer.classList.add("slide-in-animation");
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />

      <div className="parallax-section">
        <div className="parallax-image"></div>
        <motion.div
          className="position-absolute text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 5.8, staggerChildren: 0.5, delay: 1 }}
        >
          <h1 className="text-white">
            <FormattedMessage id="template.title2" />
          </h1>
          <motion.p className="text-about" variants={textVariants}>
            <FormattedMessage id="about.description" />
          </motion.p>
          <motion.p className="text-about" variants={textVariants}>
            <FormattedMessage id="about.description1" />
          </motion.p>
          <motion.p className="text-about" variants={textVariants}>
            <FormattedMessage id="about.description2" />
          </motion.p>
          <motion.p className="text-about" variants={textVariants}>
            <FormattedMessage id="about.description3" />
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
