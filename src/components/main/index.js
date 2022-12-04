import profilePic from './profile.png';
import bg from './blue-euclidean.png';

const Main = () => {
  return (
    <div className='relative flex justify-center items-center h-full bg-[#e7ecef]'>
      <div className='absolute top-0 bottom-0 left-0 right-0 opacity-30'>
        <img src={bg} alt='bg' className='w-full h-full' />
      </div>
      <div className='container mx-auto'>
        <div className='w-full flex flex-wrap-reverse items-center justify-center py-2'>
          <div data-aos='fade-right' className='w-full md:w-1/2 md:max-w-lg p-10 rounded-xl'>
            <h1 className='text-4xl font-bold text-center roboto'>
              Hi there! I'm <span className='text-[#274c77]'>Raul</span>
            </h1>
            <p className='text-center text-lg'>
            I'm a Full Stack Web Developer based in Deltona, Florida.
            </p>
          </div>
          <div data-aos='fade-left' className='w-full md:w-1/2 md:max-w-lg'>
            <img className='p-10' src={profilePic} alt='profile'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
