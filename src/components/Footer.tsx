import "../index.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import scania from "../Images/scania-small.png";
import carTruck from "../Images/car-truck-small.jpg";

interface FooterProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer-container">
      <div className="bg-image-footer">
        <div className="row overlay-div">
          <div className="footer-container-div">
            <div className="col-md-4 details-footer">
              <div className="location-footer">
                <LocationOnIcon />
                <div style={{ margin: "15px", textAlign: "left" }}>
                  <p>Straße Zeil</p>
                  <p>Frankfurt, Germany</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 details-footer">
              <img
                src={scania}
                alt="scania"
                className="img-thumbnail footer-image"
              />
              <img
                src={carTruck}
                alt="scania"
                className="img-thumbnail footer-image"
              />
            </div>

            <div className="col-md-4 details-footer">
              <div className="location-footer">
                <LocationOnIcon />
                <div style={{ margin: "15px", textAlign: "left" }}>
                  <p>Straße Zeil</p>
                  <p>Frankfurt, Germany</p>
                </div>
              </div>
            </div>
          </div>
          <div className="line-footer"></div>
          <div className="copyrights">
            <h6>Powered by Gesp It</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
