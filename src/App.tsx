import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Loading } from './components/Loading/Loading'
import { Home } from './components/Home/Home'
import { Video } from './components/Video/Video'
import { useState } from 'react'


function App() {

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {
        loaded ?
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="video/:name" element={<Video />} />
              </Route>
            </Routes>
          </BrowserRouter>
          : <Loading loaded={loaded} setLoaded={() => setLoaded(true)} />
      }
    </>
  )
}

export default App
