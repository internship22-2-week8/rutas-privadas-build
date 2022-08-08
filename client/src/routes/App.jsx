
import { Gallery } from '../components/Gallery'
import { Login } from '../components/Login'
import {Home} from '../components/Home'
import PrivateRoutes from './PrivateRoutes'

import { Routes,Route } from 'react-router-dom'



function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Bienvenido</h1>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<PrivateRoutes component={Home} role="basic"/>} />
        <Route exact path="/gallery" element={<PrivateRoutes component={Gallery} role="admin"/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App
