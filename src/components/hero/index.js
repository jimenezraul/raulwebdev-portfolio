import profilePic from './profile.png';
import bg from './blue-euclidean.png';
import NavBar from '../Navbar';
import { handleScroll } from '../../utils/handleScroll';

const Hero = () => {
  return (
    <section className='relative flex justify-center items-center bg-[#e7ecef] overflow-hidden'>
      <NavBar />
      <div className='absolute top-0 bottom-0 left-0 right-0 opacity-30'>
        <img src={bg} alt='bg' className='w-full h-full' />
      </div>
      <div className='container mx-auto'>
        <div className='w-full flex flex-wrap-reverse items-center justify-center py-2'>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            className='flex flex-col items-center w-full md:w-1/2 max-w-lg rounded-xl'
          >
            <h1 className='text-slate-700 text-3xl md:text-4xl font-bold text-center roboto'>
              Hi there! I'm <span className='text-blue-700'>Raul</span>
            </h1>
            <p className='text-center text-md md:text-lg'>
              I'm a Full Stack Web Developer based in Deltona, Florida.
            </p>
            <div className='flex flex-wrap justify-center space-x-5'>
              <a
                href='mailto:rauljimenezengineer@gmail.com'
                className='content-center text-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mt-4 shadow'
              >
                Let's Talk
              </a>
              <a
                className='content-center text-center border backdrop-blur border-blue-400 hover:backdrop-blur-3xl text-slate-700 px-4 py-2 rounded-lg mt-4 shadow-lg'
                onClick={handleScroll}
                href='#projects'
              >
                My Projects
              </a>
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='w-full md:w-1/2 max-w-lg'
          >
            <img src={profilePic} alt='profile'></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
