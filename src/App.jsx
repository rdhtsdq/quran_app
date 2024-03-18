import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import { Toaster } from 'react-hot-toast'
import Detail from './pages/detail'

function App() {

  return (
    <>
      <div className='h-screen w-screen bg-slate-950 overflow-hidden text-slate-200'>
        <Router>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/surah/:id' element={<Detail />} />
          </Routes>
        </Router>
        <Toaster position='top-right' />
      </div>
    </>
  )
}

export default App
