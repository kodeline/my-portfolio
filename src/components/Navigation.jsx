import ThemeButton from './ThemeButton';
import LangButton from "./LangButton";
import { useTranslation } from 'react-i18next';


function Navigation() {

	const [t,i18n] = useTranslation('global');
	
	return (
		<nav className='flex justify-end py-8'>
			<div className='mx-10 font-bold uppercase'>
				<a href="#about" className='mx-3'>{t('nav.nav-one')}</a>
				<a href="#portfolio" className='mx-3'>{t('nav.nav-two')}</a>
				<a href="#contact" className='mx-3'>{t('nav.nav-three')}</a>
			</div>
			<div className='flex flex-row items-center place-content-center '>
				<div className=''>
					<ThemeButton /> 
				</div>
				<div className=''>
					<LangButton />
				</div>

			</div>
		</nav>

	)
}

export default Navigation