import About from "./About";
import Footer from "./Footer";
import ImagesFirstPage from "./ImagesFirstPage";
import Navbar from "./Navbar";
import Template from "./Template";
import TopNavbar from "./TopNavbar";

interface HomeProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Home: React.FC<HomeProps> = ({ changeLanguage, locale }) => {
  return (
    <div className="App">
      <TopNavbar />
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <Template />
      <About changeLanguage={changeLanguage} locale={locale} />
      <ImagesFirstPage changeLanguage={changeLanguage} locale={locale} />
      <Footer changeLanguage={changeLanguage} locale={locale} />
    </div>
  );
};

export default Home;
