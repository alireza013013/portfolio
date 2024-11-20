import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
