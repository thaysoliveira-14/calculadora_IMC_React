import Imagem from './componentes/Imagem'
import Calculadora from './componentes/Calculadora'
import './App.css'

function App() {

  return(
    <>
    <main>
      <Imagem className='imgPrincipal'/>
      <Calculadora />
    </main>
    </>
  )
}

export default App