
function Nome({ nome, mudarNome }) {
    return(
        <div>
            <span style={{ color: '#FF0000'}}>Bem vindo: {nome}</span>
            <br/>
            <button onClick={ () => mudarNome('Lucas') }>Trocar nome</button>
        
        </div>
    )
}

export default Nome