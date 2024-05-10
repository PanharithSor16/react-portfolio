// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Project from "./component/Project"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Project/>
    <Footer/>
    </>
  )
}

export default App
