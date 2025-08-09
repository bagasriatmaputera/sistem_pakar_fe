import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BrowsePage from './Page/Browse'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BrowsePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
