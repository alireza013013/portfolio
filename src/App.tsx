import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Loading } from './components/Loading/Loading'
import { Home } from './components/Home/Home'
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
                <Route index element={<Home loaded={loaded} />} />
              </Route>
            </Routes>
          </BrowserRouter>
          : <Loading loaded={loaded} setLoaded={() => setLoaded(true)} />
      }
    </>
  )
}

export default App
