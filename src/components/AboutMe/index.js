import logo from '../../img/memoji.png';

const AboutMe = () => {
  return (
    <section id='about-me' className='py-10 h-full bg-blue-400'>
      <h1 className='drop-shadow-lg roboto text-4xl text-center text-white roboto pt-5'>
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

          <div className='w-full md:w-6/12 p-5 bg-white rounded-lg border border-slate-400 shadow'>
            <p className='text-slate-600 text-lg font-semibold mb-3'>
              My name is Raul and I am a talented barber and full stack
              developer. I have been working in the barbering industry for two
              decades and have developed a keen eye for details. In my free
              time, I enjoy listening to music and drawing, I have always had a
              love for music and find that it helps to relax and inspire me in
              my work.
            </p>
            <p className='text-slate-600 text-lg font-semibold'>
              I initially started coding as a hobby, but quickly realized that
              it was something I was truly passionate about and decided to
              pursue a career change. It was a big decision, but I am excited to
              be able to do what I love and help others in the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
