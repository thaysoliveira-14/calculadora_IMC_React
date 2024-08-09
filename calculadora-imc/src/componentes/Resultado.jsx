import './Resultado.css'

function Resultado({imc, classificacao}) {
    return(
        <>
            <div className="resultado-container">
                    <p className='resultado'>{`Seu IMC é`}<h2>{imc}</h2></p>
                <p className='classificacao'>{classificacao}</p>
            </div>
        </>
    )
}

export default Resultado