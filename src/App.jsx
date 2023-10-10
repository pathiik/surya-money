import './App.css'

import Header from './components/Header/Header'
import Hero from './components/hero/Hero'
import PopularServices from './components/popularServices/PopularServices'
import Antivirus from './components/antivirus/Antivirus'
import OnlineShopping from './components/onlineShopping/OnlineShopping'
import Banks from './components/banks/Banks'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>   
      <Header />
      <Hero />
      <PopularServices />
      <Antivirus />
      <OnlineShopping />
      <Banks />
      <Footer />   
    </>
  )
}

export default App
