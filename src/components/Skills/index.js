const skillsList = [
  {
    title: 'Front End',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'TailwindCSS',
      'Bootstrap',
    ],
    icon: 'fab fa-html5',
  },
  {
    title: 'Back End',
    skills: [
      'NodeJS',
      'Express',
      'MySQL',
      'Sequelize',
      'MongoDB',
      'Mongoose',
      'GraphQL',
    ],
    icon: 'fa-solid fa-code',
  },
  {
    title: 'Other',
    skills: ['Git', 'GitHub', 'Heroku', 'Netlify', 'OAuth2', 'Scrum Board'],
    icon: 'fa-solid fa-screwdriver-wrench',
  },
];

const Skills = () => {
  return (
    <section id='skills' className='py-10 h-full bg-[#e7ecef]'>
      <div className='container mx-auto px-2'>
        <div className='flex flex-wrap justify-center text-center mb-10'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2
              data-aos='fade-up'
              data-aos-duration='1000'
              className='roboto text-slate-700 text-4xl font-semibold'
            >
              My Skills
            </h2>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {skillsList.map((skill, index) => (
            <div className='w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'
              >
                <div className='px-4 py-5 flex-auto'>
                  <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                    <i className={`${skill.icon}`}></i>
                  </div>
                  <h6 className='text-slate-700 text-xl font-semibold'>
                    {skill.title}
                  </h6>
                  <div className='mt-2 mb-4 text-slate-600'>
                    <ul>
                      {skill.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
