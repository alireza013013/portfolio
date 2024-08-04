import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Introduction } from './components/Introduction/Introduction'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
// import { Projects } from './components/Projects/Projects'
// import { ContactUs } from './components/ContactUs/ContactUs'
import { Loading } from './components/Loading/Loading'
import { useState } from 'react'

function App() {

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {
        loaded ?
          <BrowserRouter>
            <div className='main'>
              <div className='container'>
                <Navbar />
                <Introduction />
                <Experience />
                <Skills />
                {/* <Projects />
            <ContactUs /> */}
              </div>
            </div>
          </BrowserRouter>
          : <Loading loaded={loaded} setLoaded={() => setLoaded(true)} />
      }
    </>
  )
}

export default App
