import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function TopNavbar() {
  return (
    <div className="top-navbar container-fluid">
      <div className="row">
        <div className="col-md-6 left-container">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <AccessTimeIcon className="me-2" />
                <span className="working-hours">Mon-Fri: 9AM-18PM</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <MailOutlineIcon className="me-2" />
                <Link to="mailto:office@rg-cargo.com">office@rg-cargo.com</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <PhoneIcon className="me-2" />
                <Link to="tel:+40723888885">
                  <span className="phone-number">+40 723 888 885</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-end right-container">
          <Link
            to="https://wa.me/+40723888885"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary">
              <FormattedMessage id="navbar.cotatie" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
