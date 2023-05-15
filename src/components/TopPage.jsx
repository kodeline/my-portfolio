import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ResumeEn from '../assets/cv-navarro-en.pdf';
import ResumeEs from '../assets/cv-navarro-es.pdf';
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

function TopPage() {

	const [t] = useTranslation('global');

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);


	
return (
	<div className='top h-[80vh] grid justify-item-center place-content-center' data-aos='fade-up'>
		<h2 className='text-6xl font-bold text-gray-800 dark:text-gray-300 my-2'> {t('top-page.hello-one')} </h2>
		<h1 className='text-8xl font-bold text-[#1079ea] my-2'> Joaquin Navarro</h1>
		<h2 className='text-6xl font-bold text-gray-800 dark:text-gray-300 my-2'> {t('top-page.hello-two')} </h2>
		{/* Social Media */}
		<div className='flex flex-row my-3 '>
			<a href='https://www.linkedin.com/in/jose-joaquin-navarro/' className='text-5xl pr-1 text-gray-800 dark:text-gray-300'>
				<RiLinkedinBoxFill />
			</a>
			<a href='#' className='text-5xl pl-1 text-gray-800 dark:text-gray-300'>
				<RiGithubFill />
			</a>
		</div>
		{/* Resume */}
		<div className='flex flex-row justify-center my-3'>
			<a
				href={ResumeEn}
				target='_blank'
				className='border-2 font-semibold text-gray-800 border-gray-800 hover:text-[#1079ea] hover:border-[#1079ea] rounded-3xl py-2 px-4 mx-3 dark:text-gray-100 dark:border-gray-100'
			> {t('top-page.res-view')}
			</a>
			<a
				href={ResumeEn}
				download=''
				className='border-2 font-semibold text-gray-800 border-gray-800 hover:text-[#1079ea] hover:border-[#1079ea] rounded-3xl py-2 px-4 mx-3 dark:text-gray-100 dark:border-gray-100'
			> {t('top-page.res-download')}
			</a>
		</div>
	</div>
)

}

export default TopPage