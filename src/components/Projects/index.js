import { projectsList } from '../../utils/projectsList';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='relative py-10 h-full bg-[#e7ecef]'>
      <div className='container mx-auto px-2'>
        <div className='flex flex-wrap justify-center text-center mb-10'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2
              data-aos='fade-up'
              data-aos-duration='1000'
              className=' roboto text-slate-700 text-dlate-500 text-4xl font-semibold'
            >
              My Projects
            </h2>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {projectsList.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
