import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ResumeEn from '../assets/cv-navarro-en.pdf';
import ResumeEs from '../assets/cv-navarro-es.pdf';
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';
import React from 'react';

function TopPage() {

	const [t] = useTranslation('global');
	const el = useRef(null);
	
	{/* Variables for change the language in typed animation */}
	const helloTwo = t('top-page.hello-two');
	const helloThree = t('top-page.hello-three');

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [helloTwo, helloThree],
      typeSpeed: 75,
			backDelay: 2000,
			loop: true
    });
    return () => {
      typed.destroy();
    };
  },);

return (
	<div className='h-[80vh] grid justify-item-center  place-content-center ml-5' data-aos='fade-up'>
		<h2 className='text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-300 lg:my-2'> {t('top-page.hello-one')} </h2>
		<h1 className='text-3xl sm:text-6xl md:text-6xl lg:text-8xl font-bold text-[#1079ea] lg:my-2'> Joaquin Navarro</h1>
		<div className="App">
      <span ref={el} className='text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-300 lg:my-2' />
    </div>
		{/* Social Media */}
		<div className='flex flex-row my-3 '>
			<a href='https://www.linkedin.com/in/jose-joaquin-navarro/' className='text-2xl lg:text-5xl pr-1 text-gray-800 dark:text-gray-300 hover:text-[#1079ea] dark:hover:text-[#1079ea]'>
				<RiLinkedinBoxFill />
			</a>
			<a href='#' className='text-2xl lg:text-5xl pl-1 text-gray-800 dark:text-gray-300 hover:text-[#1079ea] dark:hover:text-[#1079ea]'>
				<RiGithubFill />
			</a>
		</div>
		{/* Resume */}
		<div className='flex flex-row justify-center my-3'>
			<a
				href={ResumeEn}
				target='_blank'
				className='text-[12px] 2xl:text-[18px] border-2 text-gray-800 border-gray-800 hover:text-[#1079ea] hover:border-[#1079ea] rounded-3xl py-2 px-2 lg:px-4 mx-1 lg:mx-3 dark:text-gray-100 dark:border-gray-100'
			> {t('top-page.res-view')}
			</a>
			<a
				href={ResumeEn}
				download=''
				className='text-[12px] 2xl:text-[18px] border-2  text-gray-800 border-gray-800 hover:text-[#1079ea] hover:border-[#1079ea] rounded-3xl py-2 px-2 lg:px-4 mx-1 lg:mx-3 dark:text-gray-100 dark:border-gray-100'
			> {t('top-page.res-download')}
			</a>
		</div>
	</div>
)

}

export default TopPage