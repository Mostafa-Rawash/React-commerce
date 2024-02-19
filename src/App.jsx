import { Outlet } from 'react-router-dom'
import NavbarSec from "./Component/NavbarSec.jsx"
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
function App() {
  return (
    <>
      <NavbarSec />
      <Container>
       <Outlet />

   cc
      </Container>
    </>
  )
}

export default App
