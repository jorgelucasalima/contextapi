import { useContext } from "react"
import { UserContext } from "../../contexts/user"




function Nome() {

    const {alunos} = useContext(UserContext)


    return(
        <div>
            <span style={{ color: '#FF0000'}}>Bem vindo: {alunos}</span>
            <button onClick={()=> setAlunos('Lucas lima')}>trocar nome</button>
            
        
        </div>
    )
}

export default Nome