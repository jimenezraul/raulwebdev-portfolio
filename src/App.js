import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
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
