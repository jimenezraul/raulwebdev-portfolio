import logo from '../../img/memoji.png';

const AboutMe = () => {
  return (
    <section id='about-me' className='py-10 h-full bg-blue-400'>
      <h1
        className='drop-shadow-lg roboto text-4xl text-center text-white roboto pt-5'
      >
        About Me
      </h1>
      <div className='container mx-auto px-2 h-full my-10'>
        <div className='flex flex-wrap justify-center items-center'>
          <div className='w-full md:w-6/12 px-4 max-w-xs mb-4'>
            <img
              src={logo}
              alt='profile'
              className='rounded-full bg-white border border-slate-400 shadow-md'
            />
          </div>

          <div className='w-full md:w-6/12 px-4'>
            <p
              className='text-slate-600 text-lg font-semibold bg-white p-5 rounded-lg border border-slate-400 shadow'
            >
              I am a Full Stack Developer with a passion for building beautiful and
              user-friendly websites. I have a strong understanding of both
              front-end and back-end development, and I am excited to put my
              skills to use in a professional setting. I am a quick learner and
              a team player, and I am confident that I can be a valuable asset
              to any web development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
