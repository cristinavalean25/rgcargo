import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import "../CssPages/Contact.css";
import Footer from "./Footer";

interface ContactProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Contact: React.FC<ContactProps> = ({ changeLanguage, locale }) => {
  const workingHours = [
    { day: "Mon", hours: "09:00 - 18:00" },
    { day: "Tue", hours: "09:00 - 18:00" },
    { day: "Wed", hours: "09:00 - 18:00" },
    { day: "Thu", hours: "09:00 - 18:00" },
    { day: "Fri", hours: "09:00 - 18:00" },
    { day: "Sat", hours: "Closed", bold: true },
    { day: "Sun", hours: "Closed", bold: true },
  ];

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
            <div className="col-md-6 ">
              <h2 className="title-programs">Rg-Cargo</h2>
              <p className="workingHours">
                We love our customers, so feel free to visit during normal
                business hours.
              </p>
              {workingHours.map((item, index) => (
                <p
                  key={index}
                  style={{ fontWeight: item.bold ? "bold" : "normal" }}
                  className="workingHours"
                >
                  {item.day}: {item.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer changeLanguage={changeLanguage} locale={locale} />
    </>
  );
};

export default Contact;
