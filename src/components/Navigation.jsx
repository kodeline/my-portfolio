import ThemeButton from './ThemeButton';
import LangButton from "./LangButton";
import { useTranslation } from 'react-i18next';


function Navigation() {

	const [t] = useTranslation('global');
	
	return (
		<nav className='flex justify-end py-10'>
			<div className='mx-20 my-1 font-bold uppercase'>
				<a href="#about" className='indicator mx-3 py-2'>{t('nav.link-one')}</a>
				<a href="#portfolio" className='indicator mx-3 py-2'>{t('nav.link-two')}</a>
				<a href="#contact" className='indicator mx-3 py-2'>{t('nav.link-three')}</a>
			</div>
			<div className='flex flex-row items-center place-content-center '>
				<div className='border-r-2 mt-2'>
					<LangButton />	
				</div>
				<div className='text-2xl'>
					<ThemeButton /> 
				</div>

			</div>
		</nav>

	)
}

export default Navigation