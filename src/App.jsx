
import './App.css'
import Footer from './components/Footer'
// import Contact from './components/Contact'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import UspAndAdvantages from './components/UspAndAdvantages'
import Work from './components/Work'
import ZeroWasteInitiative from './components/ZeroWasteInitiative'
// import Test from './components/test'

function App() {


  return (
    <>
   <div className='flex justify-center'>
   <NavBar/>
   </div>
   <div className=' h-screen'>
    <Hero/>
   </div>
   <Work/>
   <UspAndAdvantages/>
   <ZeroWasteInitiative/>
   <Footer/>
    </>
  )
}

export default App
