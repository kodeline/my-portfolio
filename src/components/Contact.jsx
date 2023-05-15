import { FaRegPaperPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Contact () {

  const [t] = useTranslation('global');
  
  return(
    <section id='contact' className='h-[80vh] mt-40'>
      <h1 className='mb-10 text-4xl text-center'>{t('contact.title')}</h1>
      {/*Form */}
        <form action='#' method='post' className='flex flex-col items-center justify-center' data-aos='fade-left' >
          <input
            className='bg-gray-100 border-b-black border-b-[1px] dark:bg-[#091a28] dark:border-b-gray-100 outline-none p-2 m-4 w-3/12'
            type='text'
            placeholder={t('contact.form-name')}
            required='required'
            name='name'
          />
          <input
            className='bg-gray-100 border-b-black dark:bg-[#091a28] dark:border-b-gray-100 border-b-[1px] outline-none p-2 m-4 w-3/12'
            type='email'
            placeholder='Email'
            required='required'
            name='email'
          />
          <textarea
            className='bg-gray-100 border-b-black dark:bg-[#091a28] dark:border-b-gray-100 border-b-[1px] p-2 outline-none resize-none w-3/12 my-6 h-[150px]'
            placeholder={t('contact.form-msg')}
            required='required'
            name='message'
          >
          </textarea>
          <button type='submit' className='border-2 border-black dark:border-white rounded-3xl py-2 px-4 mx-1 flex flex-row gap-2'> 
            <FaRegPaperPlane className='mt-1'/> {t('contact.form-btn')}
          </button>
        </form>
   
    </section>
  )
}

export default Contact;