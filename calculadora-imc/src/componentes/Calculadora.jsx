import { useState } from "react"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import './Calculadora.css'

function Calculadora() {

    const[imc, setImc] = useState(null)
    const[classificacao, setClassificacao] = useState('')

    function calcularIMC(peso, altura) {
        if(peso && altura) {
            const resultadoIMC = parseFloat(peso)/(altura*altura)
            setImc(resultadoIMC.toFixed(2))
            definirClassificacao(resultadoIMC)
        }
    }

    const definirClassificacao = (imc) => {
        if (imc < 18.5) {
        setClassificacao('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 24.9) {
        setClassificacao('Peso normal');
        } else if (imc >= 25 && imc < 29.9) {
        setClassificacao('Sobrepeso');
        } else if (imc >= 30 && imc < 34.9) {
        setClassificacao('Obesidade grau I');
        } else if (imc >= 35 && imc < 39.9) {
        setClassificacao('Obesidade grau II');
        } else {
        setClassificacao('Obesidade grau III');
        }
    };

    return(
        <div className="calculadora-container">
            <div className="calculadora-container__header">
                <h1>Calculadora de IMC</h1>
                <span className="underline"></span>
            </div>
            <Formulario calcularIMC={calcularIMC} />
            <Resultado imc={imc} classificacao={classificacao} />
        </div>
    )
}

export default Calculadora