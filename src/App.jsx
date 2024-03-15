import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>

      <NavBar />

      <ItemListContainer saludo="Hola Bienvenid@!" nombre="Proyecto Ecommerce" />

    </div>
  )
}

export default App
