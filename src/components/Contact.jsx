import { HiOutlineMail } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";
import { useTranslation } from 'react-i18next';


function Contact () {

  const [t] = useTranslation('global');
  
  return(
    <section id='contact' className='w-full h-[80vh] md:h-[40vh] mt-40'>
      <h1 className='mb-10 text-4xl text-center'>{t('contact.title')}</h1>
      <div className='flex flex-col md:flex-row md:justify-center lg:justify-center'>
        {/* Email Panel */}
        <div className='bg-white dark:bg-[#081825] w-[80%] lg:w-[30%] 2xl:w-[20%] sm:mx-4 mx-10 h-[20vh] pb-2 mb-10 py-5 rounded-xl text-center 2xl:flex 2xl:justify-center' data-aos='fade-up'>
          <div className='mx-10 mt-5'>
            <div className='inline-flex mx-2 text-xl font-semibold my-1 justify-center'>
              <span className='pr-2 pt-1 '> < HiOutlineMail  /> </span>
              <p>Email</p>
            </div>
            <div className='flex flex-row items-center justify-center md:justify-center 2xl:justify-center 2xl:mx-0'>
              <p className='py-2 mx-1 text-gray-700 dark:text-gray-400 2xl:text-xl'>navarrojosejoaquin@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Location Panel */}
        <div className='bg-white dark:bg-[#081825] w-[80%] lg:w-[30%] 2xl:w-[20%] sm:mx-4 mx-10 h-[20vh] pb-2 mb-10 py-5 rounded-xl text-center 2xl:flex 2xl:justify-center' data-aos='fade-up'>
          <div className='mx-10 mt-5'>
            <div className='inline-flex mx-2 text-xl font-semibold my-1 justify-center'>
              <span className='pr-2 pt-1 '> < TbMap2 /> </span>
              <p>{t('contact.title-two')}</p>
            </div>
            <div className='flex flex-row items-center justify-center md:justify-center 2xl:justify-center 2xl:mx-0'>
              <p className='py-2 mx-1 text-gray-700 dark:text-gray-400 2xl:text-xl'>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>

      </div>
      {/*Form 
        <form action='#' method='post' className='flex flex-col items-center justify-center' data-aos='fade-left' >
          <input
            className='bg-gray-100 border-b-black border-b-[1px] dark:bg-[#091a28] dark:border-b-gray-100 outline-none p-2 m-4 lg:w-3/12'
            type='text'
            placeholder={t('contact.form-name')}
            required='required'
            name='name'
          />
          <input
            className='bg-gray-100 border-b-black dark:bg-[#091a28] dark:border-b-gray-100 border-b-[1px] outline-none p-2 m-4 lg:w-3/12'
            type='email'
            placeholder='Email'
            required='required'
            name='email'
          />
          <textarea
            className='bg-gray-100 border-b-black dark:bg-[#091a28] dark:border-b-gray-100 border-b-[1px] p-2 outline-none resize-none lg:w-3/12 my-6 h-[150px]'
            placeholder={t('contact.form-msg')}
            required='required'
            name='message'
          >
          </textarea>
          <button type='submit' className='border-2 border-black dark:border-white rounded-3xl py-2 px-4 mx-1 flex flex-row gap-2'> 
            <FaRegPaperPlane className='mt-1'/> {t('contact.form-btn')}
          </button>
        </form> */}
   
    </section>
  )
}

export default Contact;