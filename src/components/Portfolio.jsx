import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import PageOne from '../assets/img/kodegames.png';
import PageTwo from '../assets/img/tequepops.png';

function Portfolio() {
  return (
    <section id='portfolio' className='flex flex-col'>
      <h1 className='mt-40 mb-10 text-4xl text-center lg:mb-20'> Portfolio </h1>
      
      {/* First Website */}
      <article className='flex flex-col md:flex-row md:justify-center lg:justify-center'>
        <div
          className='bg-white dark:bg-[#081825] sm:mx-4 mx-4 py-5 rounded-lg sm:flex sm:flex-row sm:w-[80%] 
          md:flex md:flex-row md:w-[85%] lg:flex lg:flex-row lg:w-[75%] 2xl:w-[55%]'
          data-aos='fade-right'
        >
          {/* Portfolio Image */}
          <div
            className='sm:w-10/12 md:w-8/12 lg:w-7/12 h-[200px] md:h-[250px] lg:h-[250px] 
            2xl:h-[300px] overflow-hidden rounded-2xl mx-3 md:mx-3 md:my-6 lg:mx-10 lg:my-6'
          >
            <img src={PageOne} className='card-img' />
          </div>
          {/* Portfolio Info */}
          <div className='mx-10 mt-5 md:w-4/12 lg:w-5/12 grid justify-center'>
            <h3 className='text-center text-2xl font-semibold'>Kode Games</h3><br />
            <p className='lg:text-md 2xl:text-xl text-center text-gray-700 dark:text-gray-400'>A video game website with many resource for video games information, new releases, compare prices, and tools to help users choose your favorite video game.</p><br />
            <div className='flex flex-row items-center place-content-center'>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>HTML</p>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>CSS</p>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>JavaScript</p>
            </div>
            <div className='flex flex-row items-center place-content-center pt-6 text-xl'>
              <a href='https://github.com/kodeline/kodegames' className='inline-flex mx-2 hover:text-[#1079ea]'>
                <p>Code</p>
                <span className='px-2 pt-1'><BsGithub /></span>
              </a>
              <a href='https://www.kodegames.com' className='inline-flex mx-2 hover:text-[#1079ea]'>
                <p>Live Demo</p>
                <span className='px-2 pt-1'><BsBoxArrowUpRight /></span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Second Website */}
      <article className='flex flex-col-reverse md:flex-row md:justify-center lg:justify-center mt-10'>
        <div 
          className='bg-white dark:bg-[#081825] flex flex-col-reverse sm:mx-4 mx-4 py-5 rounded-lg sm:flex sm:flex-row sm:w-[80%] 
          md:flex md:flex-row md:w-[85%] lg:flex lg:flex-row lg:w-[75%] 2xl:w-[55%]' 
          data-aos='fade-up'
        >
          {/* Portfolio Info */}
          <div className='mx-10 mt-5 md:w-5/12 lg:w-5/12 grid justify-center'>
            <h3 className='text-center text-2xl font-semibold'>Mi Vaquita</h3><br />
            <p className='lg:text-md 2xl:text-xl text-center text-gray-700 dark:text-gray-400'>This is a mobile first app with mainly a dashboard, analitycs, orders information and tools that help to users to grow your business.</p><br />
            <div className='flex flex-row items-center place-content-center'>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>React JS</p>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>Tailwind CSS</p>
            </div>
            <div className='flex flex-row items-center place-content-center pt-6 text-xl'>
              <a href='https://github.com/kodeline/dashboard-store-react' className='inline-flex mx-2 hover:text-[#1079ea]'>
                <p>Code</p>
                <span className='px-2 pt-1'><BsGithub /></span>
              </a>
              <a href='https://www.kodegames.com' className='inline-flex mx-2 hover:text-[#1079ea]'>
                <p>Live Demo</p>
                <span className='px-2 pt-1'><BsBoxArrowUpRight /></span>
              </a>
            </div>
          </div>
          {/* Portfolio Image */}
          <div 
            className='sm:w-10/12 md:w-6/12 lg:w-7/12 h-[200px] md:h-[250px] lg:h-[250px] 
            2xl:h-[300px] overflow-hidden rounded-2xl mx-3 md:mx-3 md:my-6 lg:mx-10 lg:my-6'
          >
            <img src={PageTwo} className='card-img' />
          </div>
        </div>
      </article>

    </section>   
  )
}

export default Portfolio

