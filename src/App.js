import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero';
import AboutMe from './components/about-me';
import Projects from './components/Projects';
import GoToTheTop from './components/GoToTheTop';
// ..
AOS.init();

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <GoToTheTop />
    </>
  );
}

export default App;
