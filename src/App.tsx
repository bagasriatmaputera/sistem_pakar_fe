import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BrowsePage from './Page/Browse'
import FaqPage from './Page/Faq'
import FormPage from './Page/FormGejala'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BrowsePage />}></Route>
          <Route path='/faq' element={<FaqPage />}></Route>
          <Route path='/form-gejala' element={<FormPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
