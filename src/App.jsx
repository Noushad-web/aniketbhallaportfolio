import "App.scss";
import About from "components/basic/About";
import Contact from "components/basic/Contact/Contact";
import { HeroSec } from "components/basic/HeroSec";
import { Navbar } from "components/basic/Navbar";
import Projects from "components/basic/Projects/Projects";
import ScrollToTop from "components/basic/ScrollToTop";
import TechTools from "components/basic/TechTools/TechTools";
import { HeightWrapper } from "components/Reuse.Components";


const App = () => {

  return (
    <>
      <HeightWrapper mh='74.6rem'>
        <Navbar />
        <HeroSec />
      </HeightWrapper>
      <ScrollToTop />
      <About />
      <Projects />
      <TechTools />
      <Contact />
    </>
  );
}

export default App;


