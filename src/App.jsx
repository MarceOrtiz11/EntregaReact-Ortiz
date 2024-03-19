import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
    <div>

      <NavBar />

      <ItemListContainer texto="Hola Bienvenid@!" texto2="Proyecto Ecommerce" />

    </div>
  )
}

export default App
