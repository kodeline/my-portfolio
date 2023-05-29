import ThemeButton from './ThemeButton';
import LangButton from './LangButton';
import { useTranslation } from 'react-i18next';
import { RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';



function Navigation() {

	const [t] = useTranslation('global');

	let [open, setOpen] = useState(false);

	const handleNav = () => setOpen(!open);

	return (
		<nav className='w-full  mt-4 lg:mt-8 relative'>
			<div className='md:flex items-center justify-end py-4 md:px-10 px-7 lg:my-5 '>
				{/* Responsive menu button */}
				<div
					className='flex justify-end text-3xl z-[2] right-25 top-6 cursor-pointer md:hidden'
					onClick={handleNav}
				> {open ? <RiCloseFill /> : <RxHamburgerMenu />}
				</div>
				<ul className={`md:flex bg-gray-100 dark:bg-[#091a28] h-screen md:h-7 lg:h-7 md:pb-0 pb-12 fixed md:static md:z-auto 
					z-[1]  w-full md:w-auto md:pl-0  ease-in-out
					${open ? 'left-0' : 'left-[-900px]'}
				`}>
					<li className='text-xl text-center mt-20 md:my-0 '>
						<a href="#about" onClick={handleNav} className='indicator mx-2 py-2'>{t('nav.link-one')}</a>
					</li>
					<li className='text-xl text-center md:my-0 my-7'>
						<a href="#portfolio" onClick={handleNav} className='indicator mx-2 py-2'>{t('nav.link-two')}</a></li>
					<li className='text-xl text-center md:my-0 my-7'>
						<a href="#contact" onClick={handleNav} className='indicator mx-2 py-2'>{t('nav.link-three')}</a>
					</li>
					{/* Language & Theme Button*/}
					<li className='flex flex-row justify-center items-center text-xl md:ml-10 lg:ml-12 md:my-0 mt-7 '>
						<div className='border-r-2 px-2 '>
							<LangButton />
						</div>
						<div className='text-xl px-2 pb-[4px]'>
							<ThemeButton />
						</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navigation