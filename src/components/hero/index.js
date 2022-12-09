import profilePic from '../../img/profile.png';
import bg from '../../img/blue-euclidean.png';
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
          <div className='z-40 flex flex-col items-center w-full md:w-1/2 max-w-lg rounded-xl'>
            <h1 className='text-slate-700 text-4xl md:text-6xl font-bold text-center roboto'>
              Hi there! I'm <span className='roboto text-blue-500'>Raul</span>
            </h1>
            <p className='text-center text-md md:text-lg'>
              I'm a Full Stack Web Developer based in Deltona, Florida.
            </p>
            <div className='flex flex-wrap justify-center space-x-5'>
              <a
                href='mailto:rauljimenezengineer@gmail.com'
                className='z-40 content-center text-center bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 shadow'
              >
                Let's Talk
              </a>
              <a
                className='z-40 content-center text-center border border-gray-400 backdrop-blur hover:backdrop-blur-3xl text-slate-700 px-4 py-2 rounded-lg mt-4 shadow-lg'
                onClick={handleScroll}
                href='#projects'
              >
                My Projects
              </a>
            </div>
          </div>
          <div className='z-40 w-full md:w-1/2 max-w-md'>
            <img src={profilePic} alt='profile'></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
