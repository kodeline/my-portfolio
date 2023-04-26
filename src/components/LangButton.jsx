import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

{/* Component for translate our web with i18next */}

function LangButton() {
  const [lang, setLang] = useState('en')
  const [t,i18n] = useTranslation('global');
  
  useEffect(() => {
    if (lang === 'es') {
      setLang('en')
    } else {
      setLang('es')

    }
  }, []);

  const handleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }


  return (
    <button onClick={handleLang} className='px-1 mx-1'>
      {
        lang === 'en' ?
          <button onClick={() => i18n.changeLanguage('en')}> EN </button>
          :
          <button onClick={() => i18n.changeLanguage('es')}> ES </button>
      }
    </button>
  )
}

export default LangButton