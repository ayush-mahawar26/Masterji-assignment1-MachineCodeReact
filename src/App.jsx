import { useEffect, useState } from 'react'
import { BrowserRouter , Route , Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { OtpFormPage } from './pages/OtpPage';
import { CourseListPage } from './pages/CourseListPage';
import { BatchPage } from './pages/Batches';
import { HomePage } from './pages/Home';

function App() {
  return <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/otp-form' element={<OtpFormPage/>}></Route>
            <Route path='/course-list' element={<CourseListPage/>}></Route>
            <Route path='/batches' element={<BatchPage/>}></Route>

          </Routes>

        </BrowserRouter>
}

export default App
