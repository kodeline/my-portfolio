import { useTranslation } from 'react-i18next';

function About () {

  const [t] = useTranslation('global');
  
  return(
    <section id="about" className='h-[100vh] flex flex-col items-center'>
      <h1 className='mt-40 mb-10 text-4xl text-center'>{t('about.title')}</h1>
      <div className='flex flex-row  items-center place-content-center w-9/12'>
        <div className='col-span-3 w-3/12'>
          <img className='rounded-2xl mx-auto' src={'./public/picture.png'} width={250} height={250} />
        </div>
        <div className='m-10 text-2xl w-6/12'>
          <p>Hi! I’m Joaquin Navarro, a Front End Developer and Programming Teacher based in Buenos Aires, Argentina. After working as an Programming Teacher for almost 6 years, I’ve decided to take the leap to pursue a career in Front End Developer, I love to learn new technologies and flex my creativity to create amazing things.</p>
        </div>
      </div>
      <h3 className='text-3xl my-10 text-center'>Tech I Use</h3>
      <div className='text-xl flex flex-row items-center place-content-center'>  
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>HTML</p>
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>CSS</p>
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>JavaScript</p>
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>React JS</p>
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>Tailwind CSS</p>
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>Git</p>
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>GitHub</p>
        <p className='border-2 rounded-3xl py-2 px-4 mx-2'>Next JS</p>
      </div>
      {/*
      <div className='flex flex-row mx-auto p-8 bg-slate-700 rounded-lg'>
        <h3>These are, but not limited to, the tech I use for building client-side applications</h3><br />
        
        <img className='mx-4' src={'./public/tecnologies/css.webp'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/js.png'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/react.png'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/tailwind.png'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/next.png'} width={100} height={100} />
      </div>
      <div className='flex flex-row mx-auto p-8 bg-slate-700 rounded-lg'>
        <img className='mx-4 my-2' src={'./public/tecnologies/html.png'} width={80} height={80} />
        <img className='mx-4' src={'./public/tecnologies/css.webp'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/js.png'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/react.png'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/tailwind.png'} width={100} height={100} />
        <img className='mx-4' src={'./public/tecnologies/next.png'} width={100} height={100} />
  </div>*/}
    </section>
  )
}

export default About

