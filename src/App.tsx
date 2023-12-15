import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import TransportMarfa from "./components/TransportMarfa";
import TransportAnimale from "./components/TransportAnimale";
import TransportFrigorific from "./components/TransportFrigorific";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import TransportMasini from "./components/TransportMasini";

interface AppProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const App: React.FC<AppProps> = ({ changeLanguage, locale }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home changeLanguage={changeLanguage} locale={locale} />}
      />
      <Route
        path="/AboutUs"
        element={<AboutUs changeLanguage={changeLanguage} locale={locale} />}
      />
      <Route
        path="/About"
        element={<About changeLanguage={changeLanguage} locale={locale} />}
      />
      <Route
        path="/Services"
        element={<Services changeLanguage={changeLanguage} locale={locale} />}
      />
      <Route
        path="/Contact"
        element={<Contact changeLanguage={changeLanguage} locale={locale} />}
      />
      <Route
        path="/TransportMarfa"
        element={
          <TransportMarfa changeLanguage={changeLanguage} locale={locale} />
        }
      />
      <Route
        path="/TransportAnimale"
        element={
          <TransportAnimale changeLanguage={changeLanguage} locale={locale} />
        }
      />
      <Route
        path="/TransportFrigorific"
        element={
          <TransportFrigorific
            changeLanguage={changeLanguage}
            locale={locale}
          />
        }
      />
      <Route
        path="/TransportAnimale"
        element={
          <TransportAnimale changeLanguage={changeLanguage} locale={locale} />
        }
      />
      <Route
        path="/TransportMasini"
        element={
          <TransportMasini changeLanguage={changeLanguage} locale={locale} />
        }
      />
    </Routes>
  );
};

export default App;
