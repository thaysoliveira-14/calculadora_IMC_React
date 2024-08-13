import Imagem from './assets/imgFitness.svg'
import './componentes/Imagem.css'
import Calculadora from './componentes/Calculadora'
import Footer from './componentes/Footer'
import './App.css'

function App() {

  return(
    <>
    <main>
      <img src={Imagem} alt="" />
      <Calculadora />
    </main>
    <Footer />
    </>
  )
}

export default App