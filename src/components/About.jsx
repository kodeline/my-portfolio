import { useTranslation } from 'react-i18next';
import photo from '../assets/img/picture.png';


function About () {

  const [t] = useTranslation('global');

  return(
    <section id='about' className='h-[100vh] flex flex-col items-center mb-60'>
      <h1 className='mt-40 mb-10 text-4xl text-center'>{t('about.title-one')}</h1>
      <div className='flex flex-col items-center place-content-center md:flex-row md:w-9/12 lg:flex-row lg:w-7/12' data-aos='fade-right'>
        <div className='col-span-3 md:w-4/12 lg:w-3/12'>
          <img className='rounded-2xl shadow-md w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]' src={photo} />
        </div>
        <div className='m-10 lg:text-2xl md:w-6/12 lg:w-6/12 text-justify text-gray-700 dark:text-gray-400'>
          <p>{t('about.content')}</p>
        </div>
      </div>
      <h3 className='text-xl lg:text-3xl my-10 text-center'>{t('about.title-two')}</h3>
      <div className='lg:text-xl flex flex-row flex-wrap gap-2 2xl:gap-3 2xl:w-5/12 items-center place-content-center' data-aos='fade-up'>  
        <p className='border-2 rounded-3xl py-2 px-4 '>HTML</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>CSS</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>JavaScript</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>Python</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>React JS</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>Tailwind CSS</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>Git</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>GitHub</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>Next JS</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>Node JS</p>
        <p className='border-2 rounded-3xl py-2 px-4 '>Express JS</p>
      </div>
    </section>
  )
}

export default About

