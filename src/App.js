import { useState } from "react";

import Alunos from "./components/Alunos";


function App() {

    const [nomeAluno, setNomeAluno] = useState('JOAOj');




  return (
    <div className="App">
      <h1>ESCOLA</h1>
      <hr/>

      <Alunos nome={nomeAluno} mudarNome={setNomeAluno}/>
    </div>
  );
}

export default App;
