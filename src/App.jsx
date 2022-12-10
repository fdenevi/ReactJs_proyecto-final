import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App