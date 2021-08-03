import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({Children}) {

    const [alunos, setAlunos] = useState('Lucas');


    return(
        <UserContext.Provider value={{alunos}}>
            {Children}
        </UserContext.Provider>
    )
}

export default UserProvider


