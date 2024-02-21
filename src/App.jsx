import { Outlet } from 'react-router-dom'
import NavbarSec from "./Component/NavbarSec.jsx"
import Footer from "./Component/Footer.jsx"





import 'bootstrap/dist/css/bootstrap.css'
import  './assets/css/style.min.css'
import './App.css'




function App() {
  return (
    <>
      <NavbarSec />
      <div className="min-vh-100">

       <Outlet />
      </div>
       <Footer/>
    </>
  )
}

export default App
