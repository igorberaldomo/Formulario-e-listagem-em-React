
import { useState } from "react"
import FormProduto from "./FormProdutos"
import Listagem from "./Listagem"


      function App() {
  const listaInicial = [
      {nome: "Banana", descricao: "Uma fruta doce", preco: 1.25, disponivel: false },
      {nome: "Abacate", descricao: "Uma fruta com uma semente grande no meio", preco: 3.75, disponivel: true },
      {nome: "Tomate", descricao: "Usa na salada mas é fruta", preco: 6.35, disponivel: true },
      {nome: "Uva", descricao: "É azeda ou doce e vem em pencas", preco: 9.99, disponivel: false }
      ]
      const [produtos, setProdutos] = useState(listaInicial)
      return (
      <div>
        <FormProduto atualiza={setProdutos} produtos={produtos}/>
        <Listagem produtos={produtos}/>
      </div>
  )
}

export default App
