const ProjectCard = ({ project, index }) => {
  const style = {
    backgroundImage: `url(${project.image})`,
  };
  return (
    <div
      key={index}
      className='flex justify-center w-full md:w-1/2 lg:w-4/12 px-4 mb-4'
    >
      <div className='flex flex-col bg-white rounded-lg shadow overflow-hidden'>
        <div
          className='h-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
          style={style}
          title={project.title}
        ></div>
        <div className='flex flex-col p-4 h-full'>
          <div className='flex-1'>
            <div className='px-6 py-4'>
              <div className='text-slate-700 font-bold text-xl mb-2 border-b border-slate-200 pb-4'>
                {project.title}
              </div>
              <p className='text-slate-700 text-base'>{project.description}</p>
            </div>
            <div className='px-6 pt-4 pb-2 flex flex-wrap space-x-1'>
              <h1 className='font-bold text-slate-700 text-base'>Tech used:</h1>
              {project.tech.map((tech, index) => {
                const isLast = index === project.tech.length - 1;
                return (
                  <span key={index}>
                    {tech}
                    {isLast ? '.' : ','}
                  </span>
                );
              })}
            </div>
            {project.demoAccount && (
              <div className='px-6 pt-4 pb-2 flex flex-col space-x-1'>
                <h1 className='font-bold text-slate-700 text-base'>
                  Demo Account:
                </h1>
                <span className='text-slate-700'>
                  Email: {project.demoAccount.email}
                </span>
                <span className='text-slate-700'>
                  Password: {project.demoAccount.password}
                </span>
              </div>
            )}
          </div>
          <div className='px-6 py-4 flex space-x-1'>
            <a
              href={project.liveDemo}
              target='_blank'
              rel='noreferrer'
              className='cursor-pointer bg-white hover:bg-gray-100 text-slate-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
            >
              See Live
            </a>
            <a
              href={project.sourceCode}
              target='_blank'
              rel='noreferrer'
              className='cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow'
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
