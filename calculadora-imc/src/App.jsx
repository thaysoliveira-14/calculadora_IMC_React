import Imagem from './assets/imgFitness.svg'
import './componentes/Imagem.css'
import Calculadora from './componentes/Calculadora'
import './App.css'

function App() {

  return(
    <>
    <main>
      <img src={Imagem} alt="" />
      <Calculadora />
    </main>
    </>
  )
}

export default App