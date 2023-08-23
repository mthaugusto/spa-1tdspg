import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

export default function App() {

  //ÁREA DECLARATIVA 
  let meuNome = "Matheus";

  return (
    <>
      {/* ÁREA IMPERATIVA E APENAS DE RODAR, NÃO DECLARAR*/}
      <div className="container">

        <Cabecalho nomeDoUsuario={meuNome}>
          Hello World!
        </Cabecalho>
        <Conteudo/>
        <Rodape/>


      </div>
      </>
  )
}
