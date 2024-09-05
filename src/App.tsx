import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Loading } from './components/Loading/Loading'
// import { Home } from './components/Home/Home'
// import { useState } from 'react'
import React, { Suspense, useState } from 'react';
const Home = React.lazy(() => import('./components/Home/Home'));

function App() {

  const [loaded, setLoaded] = useState(true)

  return (
    <>
      <Suspense fallback={<Loading loaded={loaded} setLoaded={() => setLoaded(true)} />}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home loaded={loaded} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home loaded={true} />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* {
        loaded ?
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home loaded={loaded} />} />
              </Route>
            </Routes>
          </BrowserRouter>
          : <Loading loaded={loaded} setLoaded={() => setLoaded(true)} />
      } */}
    </>
  )
}

export default App
