import "../CssPages/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

interface FooterProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer-container">
      <div className="bg-image-footer">
        <div className="row">
          <div className="icons-footer">
            <Link to="https://www.facebook.com/">
              <FacebookIcon />
            </Link>
            <Link to="https://www.instagram.com/_.rg.42._/">
              <InstagramIcon />
            </Link>
            <Link to="">
              <TwitterIcon />
            </Link>
          </div>
          <div></div>
          <div className="line-footer"></div>

          <div className="copyrights text-center">
            <h6>Powered by Gesp It</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
