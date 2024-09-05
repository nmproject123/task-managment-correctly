// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Link, Route, Routes } from "react-router-dom"
import Tasks from "./pages/Tasks"
import HomePage from "./pages/HomePage"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <>
      <HomePage />
      {/* <Link to={'/tasks'}>Tasks</Link> */}
      <Routes>
        {/* <Route path="/tasks" element={<Tasks/>}/> */}
        <Route path="/tasks/:id" element={<Tasks />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>

    </>
  )
}

export default App
