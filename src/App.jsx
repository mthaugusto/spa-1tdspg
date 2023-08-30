import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import './App.css'

export default function App() {

  //ÁREA DECLARATIVA 
  let meuNome = "Matheus";

  return (
    <>
      {/* ÁREA IMPERATIVA E APENAS DE RODAR, NÃO DECLARAR*/}
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
      </>
  )
}
