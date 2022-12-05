import profilePic from './profile.png';
import bg from './blue-euclidean.png';
import NavBar from '../navbar';

const Hero = () => {
  return (
    <section className='relative flex justify-center items-center bg-[#e7ecef]'>
      <NavBar />
      <div className='absolute top-0 bottom-0 left-0 right-0 opacity-30'>
        <img src={bg} alt='bg' className='w-full h-full' />
      </div>
      <div className='container mx-auto'>
        <div className='w-full flex flex-wrap-reverse items-center justify-center py-2'>
          <div
            data-aos='fade-right'
            className='flex flex-col items-center w-full md:w-1/2 max-w-lg rounded-xl'
          >
            <h1 className='text-4xl font-bold text-center roboto'>
              Hi there! I'm <span className='text-[#274c77]'>Raul</span>
            </h1>
            <p className='text-center text-lg'>
              I'm a Full Stack Web Developer based in Deltona, Florida.
            </p>
            <button className='content-center text-center bg-[#274c77] hover:bg-[#1e3c5d] text-white px-4 py-2 rounded-lg mt-4'>
              Resume
            </button>
          </div>
          <div data-aos='fade-left' className='w-full md:w-1/2 max-w-lg'>
            <img src={profilePic} alt='profile'></img>
          </div>
        </div>
      </div>
      </section>
  );
};

export default Hero;
