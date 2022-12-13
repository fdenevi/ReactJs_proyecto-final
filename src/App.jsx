import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './container/CartContainer/CartContainer'
import Dudas from './components/Dudas/Dudas'
import Contacto from './components/Contacto/Contacto'
import 'bootstrap/dist/css/bootstrap.min.css'
import Error from './components/Error/Error'


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/home' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={<CartContainer/>} />
        <Route path='/dudas' element={<Dudas/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='*' element={<Error/>} />
      </Routes>    

    </BrowserRouter>
  )
}

export default App