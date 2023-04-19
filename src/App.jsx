import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'
import TopPage from './components/TopPage';

function App() {

  return (
    <div className='bg-gray-100 dark:bg-gray-900 w-full min-h-screen dark:text-white'>
      <main className='container mx-auto'>
        <Navigation />
        <TopPage />
      </main>
    </div>
   
  )
}

export default App
