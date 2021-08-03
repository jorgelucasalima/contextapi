import Nome from "../Nome"


function Alunos({ nome, mudarNome }) {
    return(
        <div>
            <h2>Compoment Alunos</h2>
            <Nome nome={nome} mudarNome={mudarNome}/>
        </div>
    )
}

export default Alunos