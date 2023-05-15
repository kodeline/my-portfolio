import Navigation from './components/Navigation'
import TopPage from './components/TopPage';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <div className='bg-gray-100 dark:bg-[#091a28] w-full min-h-screen dark:text-white dark:transition-all dark:duration-900'>
      <main className='container mx-auto'>
        <Navigation/>
        <TopPage/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
    </div>
   
  )
}

export default App
