
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Brand from './pages/Brand'
import Home from './pages/Home'
import OpenClub from './pages/OpenClub'
import Contact from './pages/Contact'
import Advantages from './pages/Advantages'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>

      <main className='container' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/advantages' element={<Advantages />} />
          <Route path='/openclub' element={<OpenClub />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      <footer className='container' >
        <Footer />
      </footer>

    </>
  )
}

export default App
