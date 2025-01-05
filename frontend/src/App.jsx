import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Pincode from './Pincode'
import PostOffice from './postOffice'
const App = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pincode/>}/>
        <Route path="/postOffice" element={<PostOffice/>}/>
      </Routes>
    </BrowserRouter>
   )
}

export default App