import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './container/CartContainer/CartContainer'
import Questions from './components/Questions/Questions'
import 'bootstrap/dist/css/bootstrap.min.css'
import Error from './components/Error/Error'
import { CartContextProvider } from './context/CartContext'


function App() {
  return (
    <CartContextProvider>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/home' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContainer/>} />
          <Route path='/Questions' element={<Questions/>} />
          <Route path='*' element={<Error/>} />
        </Routes>    

      </BrowserRouter>

    </CartContextProvider>
  )
}

export default App