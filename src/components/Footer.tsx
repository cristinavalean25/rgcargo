import "../CssPages/Footer.css";

interface FooterProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer-container">
      <div className="bg-image-footer">
        <div className="row">
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
