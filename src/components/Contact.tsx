import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import "../CssPages/Contact.css";
import Footer from "./Footer";

interface ContactProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Contact: React.FC<ContactProps> = ({ changeLanguage, locale }) => {
  return (
    <>
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <div className="container-fluid">
        <div className="contact">
          <h2 className="contact-title">Contact Us</h2>
          <span className="span-contact"></span>
        </div>
        <div className="container-75">
          <div className="row">
            {/* Partea stângă */}
            <div className="col-md-6">
              <h2>Drop us a line!</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nume
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>

            {/* Partea dreaptă */}
            <div className="col-md-6">
              <h2>Rg-Cargo</h2>
              <p>
                We love our customers, so feel free to visit during normal
                business hours.
              </p>
              <p>Mon: 09:00 - 18:00</p>
              <p>Tue: 09:00 - 18:00</p>
              <p>Wed: 09:00 - 18:00</p>
              <p>Thu: 09:00 - 18:00</p>
              <p>Fri: 09:00 - 18:00</p>
              <p>Sat: Closed</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
      <Footer changeLanguage={changeLanguage} locale={locale} />
    </>
  );
};

export default Contact;
