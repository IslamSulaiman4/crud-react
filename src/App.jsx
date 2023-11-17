import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './components/user/Index.jsx'
import Create from './components/user/Create.jsx'
import Details from './components/user/Details.jsx'
import Edit from './components/user/Edit.jsx'
export default function 
() {
  return (
    <Routes>
      <Route path='/'  element={<Index/>}/>
      <Route path='/user/index' element={<Index/>} />
      <Route path='/user/create' element={<Create/> }/> 
      <Route path='/user/:id' element={<Details />} />
      <Route path='/user/edit/:id' element={<Edit />} />
      <Route path='*' element={<h2>Page Not Found</h2>} />
    </Routes>
  )
}
