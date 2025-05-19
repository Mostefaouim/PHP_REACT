import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListUser from './components/ListUser';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
