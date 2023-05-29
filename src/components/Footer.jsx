import { useTranslation } from 'react-i18next';

function Footer () {
  const [t] = useTranslation('global');
  
  return(
    <p className='lg:text-xl text-center mb-8'>{t('footer.text')}</p>
  )
}

export default Footer