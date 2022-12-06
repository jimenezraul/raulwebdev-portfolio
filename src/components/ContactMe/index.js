const ContactMe = () => {
  return (
    <section id='contact-me' className='py-10 h-full bg-[#e7ecef]'>
      <div className='container mx-auto px-2'>
        <div className='flex flex-wrap justify-center text-center mb-10'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2
              data-aos='fade-up'
              data-aos-duration='1000'
              className='roboto text-slate-700 text-4xl font-semibold'
            >
              Contact Me
            </h2>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
            <a href='mailto:rauljimenezengineer@gmail.com'>
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'
              >
                <div className='px-4 py-5 flex-auto'>
                  <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                    <i className='text-3xl fa-solid fa-envelope'></i>
                  </div>
                  <h6 className='text-slate-600 text-xl font-semibold'>
                    Email
                  </h6>
                </div>
              </div>
            </a>
          </div>
          <div className='transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
            <a
              href='https://github.com/jimenezraul'
              target='_blank'
              rel='noreferrer'
            >
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'
              >
                <div className='px-4 py-5 flex-auto'>
                  <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                    <i className='text-3xl fa-brands fa-github'></i>
                  </div>
                  <h6 className='text-slate-600 text-xl font-semibold'>
                    GitHub
                  </h6>
                </div>
              </div>
            </a>
          </div>
          <div className='transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
            <a
              href='https://www.linkedin.com/in/raul-jimenez-778b2a196/'
              target='_blank'
              rel='noreferrer'
            >
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'
              >
                <div className='px-4 py-5 flex-auto'>
                  <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                    <i className='text-3xl fa-brands fa-linkedin'></i>
                  </div>
                  <h6 className='text-slate-600 text-xl font-semibold'>
                    LinkedIn
                  </h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
