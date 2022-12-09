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
      'jQuery',
      'OAuth',
    ],
    icon: 'fab fa-html5',
  },
  {
    title: 'Back End',
    skills: [
      'NodeJS',
      'ExpressJS',
      'MySQL',
      'Sequelize',
      'MongoDB',
      'Mongoose',
      'GraphQL',
      'Restful APIs',
      'Python',
    ],
    icon: 'fa-solid fa-code',
  },
  {
    title: 'Other',
    skills: [
      'Git',
      'GitHub',
      'Heroku',
      'Netlify',
      'Webpack',
      'TypeScript',
      'Jest',
      'Scrum Board',
      'VS Code',
    ],
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
              className='roboto text-slate-700 text-4xl font-semibold'
            >
              My Skills
            </h2>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {skillsList.map((skill, index) => (
            <div key={index} className='w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
              <div
                className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg border border-slate-300 overflow-hidden'
              >
                <div className='flex-auto'>
                  <div className='text-white p-3 text-center inline-flex flex-col items-center justify-center w-full mb-4 shadow  bg-blue-400'>
                    <i className={`drop-shadow-md text-4xl ${skill.icon}`}></i>
                    <h6 className='drop-shadow-md text-white text-xl font-bold '>
                      {skill.title}
                    </h6>
                  </div>
                  <div className='mt-2 mb-4 text-slate-600'>
                    <ul>
                      {skill.skills.map((skill, index) => (
                        <li key={index} className='font-semibold'>
                          {skill}
                        </li>
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
