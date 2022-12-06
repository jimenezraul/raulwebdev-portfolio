import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import GoToTheTop from './components/GoToTheTop';
import Skills from './components/Skills';
// ..
AOS.init();

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <GoToTheTop />
    </>
  );
}

export default App;
