import Navigation from './components/Navigation'
import TopPage from './components/TopPage';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



function App() {

  return (
    <main className='bg-gray-100 dark:bg-[#091a28] dark:text-gray-100'>
      <Navigation />
      <TopPage />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
