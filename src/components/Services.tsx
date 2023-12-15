import { FormattedMessage } from "react-intl";
import "../CssPages/Template.css";

interface ServiceProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Services: React.FC<ServiceProps> = ({}) => {
  return (
    <>
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
    </>
  );
};

export default Services;
