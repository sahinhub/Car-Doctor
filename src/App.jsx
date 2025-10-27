
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './layout/Pages/Shared/Footer'
import Header from './layout/Pages/Shared/Header'

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
