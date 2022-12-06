const contactLinks = [
  {
    name: 'Email',
    icon: 'fa-solid fa-envelope',
    link: 'mailto:rauljimenezengineer@gmail.com',
  },
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    link: 'https://github.com/jimenezraul',
  },
  {
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/raul-jimenez-778b2a196/',
  },
];

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
          {contactLinks.map((link, index) => (
            <div
              key={index}
              className='transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center'
            >
              <a href={link.link} target='_blank' rel='noreferrer'>
                <div
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'
                >
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-blue-400'>
                      <i className={`text-3xl ${link.icon}`}></i>
                    </div>
                    <h6 className='text-slate-600 text-xl font-semibold'>
                      {link.name}
                    </h6>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
