import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import PageOne from '../assets/img/kodegames.png';
import PageTwo from '../assets/img/tequepops.png';

function Portfolio() {

  useEffect(() => {
    AOS.init({duration:2000});
  },[]);

  return (
    <section id='portfolio' className=''>
      <h1 className='mt-40 mb-10 text-4xl text-center'> Portfolio </h1>
      <div className='flex flex-col  items-center place-content-center'>

        <div className='flex rounded-xl p-10 shadow-xl w-8/12 my-5 dark:bg-[#13181f]' data-aos='fade-right'>
          <div className='portfolio-img w-7/12 h-[300px] overflow-hidden rounded-2xl'>
            <img src={PageOne} className='card-img' />
          </div>
          <div className='mx-10 portfolio-info w-5/12 grid place-content-center'>
            <h3 className='text-center text-2xl font-semibold'>Kode Games</h3><br />
            <p className='text-lg text-center'>A video game website with many resource for video games information, new releases, compare prices, and tools to help users choose your favorite video game.</p><br />
            <div className='flex flex-row items-center place-content-center'>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>HTML</p>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>CSS</p>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>JavaScript</p>
            </div>
            <div className='flex flex-row items-center place-content-center pt-6 text-xl'>
              <a href='https://github.com/kodeline/kodegames' className='inline-flex mx-2 hover:text-[#F01F52]'>
                <p>Code</p>
                <span className='px-2 pt-1'><BsGithub /></span>
              </a>
              <a href='https://www.kodegames.com' className='inline-flex mx-2 hover:text-[#ec2557]'>
                <p>Live Demo</p>
                <span className='px-2 pt-1'><BsBoxArrowUpRight /></span>
              </a>
            </div>
          </div>
        </div>

        <div className='flex rounded-xl p-10 shadow-xl w-8/12 my-5 dark:bg-[#13181f]' data-aos='fade-left'>
          <div className='portfolio-info w-5/12 mx-10 grid items-center'>
            <h3 className='text-center text-2xl font-semibold'>Dashboard Restaurant</h3><br />
            <p className='text-lg text-center'>This is a mobile first app with mainly a dashboard, analitycs, orders information and tools that help to users to grow your business.</p><br />
            <div className='flex flex-row items-center place-content-center'>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>React JS</p>
              <p className='border-2 rounded-3xl py-2 px-4 mx-1'>Tailwind CSS</p>
            </div>
            <div className='flex flex-row items-center place-content-center pt-6 text-xl'>
              <a href='https://github.com/kodeline/dashboard-store-react' className='inline-flex mx-2 hover:text-[#F01F52]'>
                <p>Code</p>
                <span className='px-2 pt-1'><BsGithub /></span>
              </a>
              <a href='https://kodeline.github.io/dashboard-store-react/' className='inline-flex mx-2 hover:text-[#ec2557]'>
                <p>Live Demo</p>
                <span className='px-2 pt-1'><BsBoxArrowUpRight /></span>
              </a>
            </div>
          </div>
          <div className='portfolio-img w-7/12 h-[300px] overflow-hidden rounded-2xl'>
            <img src={PageTwo} className='card-img' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio