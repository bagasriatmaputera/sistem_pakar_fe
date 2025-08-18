import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BrowsePage from './Page/Browse'
import FaqPage from './Page/Faq'
import FormPage from './Page/FormGejala'
import ResultsPage from './Page/ResultsPage'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BrowsePage />}></Route>
          <Route path='/faq' element={<FaqPage />}></Route>
          <Route path='/form-gejala' element={<FormPage />}></Route>
          <Route path='/result/:id' element={<ResultsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
