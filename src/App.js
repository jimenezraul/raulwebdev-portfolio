import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero';
import AboutMe from './components/about-me';
// ..
AOS.init();

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
    </>
  );
}

export default App;
