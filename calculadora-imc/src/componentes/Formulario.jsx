import { useState } from 'react';
import StraightenIcon from '@mui/icons-material/Straighten';
import WeightIcon from '@mui/icons-material/MonitorWeight';
import './Formulario.css'


function Formulario({calcularIMC}) {

const [peso, setPeso] = useState('')
const [altura, setAltura] = useState('')

const btnCalcular = () => {
    calcularIMC(peso, altura)
}

    return(
        <>
        <form className='formulario'>
            <div className='formulario__grupo'>
                <label htmlFor="inputPeso">Peso em kg</label>
                <div className='formulario__grupo__input'>
                    <WeightIcon />
                    <input type="number" name="peso" id="inputPeso" value={peso} onChange={(e) => setPeso(e.target.value)} required/>
                    <p>kg</p>
                </div>
            </div>
            <div className='formulario__grupo'>
                <label htmlFor="inputAltura">Altura em metros</label>
                <div className='formulario__grupo__input'>
                    <StraightenIcon />
                    <input type="number" name="altura" id="inputAltura" value={altura} onChange={(e) => setAltura(e.target.value)} required/>
                    <p>m</p>
                </div>
            </div>
            <button type="button" className='btn-calculadora' onClick={btnCalcular}>Calcular</button>
        </form>
        </>
    )

}

export default Formulario