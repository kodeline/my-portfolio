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
    <div onClick={handleLang}>
      {
        lang === 'en' ?
          <button onClick={() => i18n.changeLanguage('en')}> En </button>
          :
          <button onClick={() => i18n.changeLanguage('es')}> Es </button>
      }
    </div>
  )
}

export default LangButton