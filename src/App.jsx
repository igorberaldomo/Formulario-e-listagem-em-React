
import { useState } from "react"


function App() {
  const listaInicial = [
    { nome: "nome4", descricao: "Descrição", preco: 1, disponivel: false },
    { nome: "nome2", descricao: "Descrição", preco: 3, disponivel: false },
    { nome: "nome3", descricao: "Descrição", preco: 6, disponivel: false },
    { nome: "nome1", descricao: "Descrição", preco: 9, disponivel: false }
  ]
  const [produtos, setProdutos] = useState(listaInicial)
  const [produto, setProduto] = useState({ nome: "", descricao: "", preco: "", disponivel: false })
  return (
    <div>
      <div>
        <table>
          <thead><tr><td>Nome</td><td>Preço</td></tr></thead>
          <tbody>
          {produtos.map((produto, index) => {
            return( <tr key={index}><td>{produto.nome}</td> <td>{produto.preco}</td></tr>)
          })}
          </tbody>
        </table>
      </div>
      <div>
        <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Nome do produto</label>
          <input type="text" id="name" value={produto.nome} onChange={(event) => setProduto({ ...produto, nome: event.target.value })} />
          <label htmlFor="descrição">Descrição do produto</label>
          <input type="text" id="descrição" value={produto.descricao} onChange={(event) => setProduto({ ...produto, descricao: event.target.value })} />
          <label htmlFor="Custo">Custo</label>
          <input type="number" id="custo" value={produto.preco} onChange={(event) => setProduto({ ...produto, preco: event.target.value })} />
          <label htmlFor="disponivel">Tem no estoque</label>
          <input type="checkbox" name="disponivel" id="disponivel" value={produto.disponivel} onChange={(event) => setProduto({ ...produto, disponivel: event.target.checked })} />
          <button onClick={(event) => {
            let ps = [...produtos, produto]
            ps.sort((a, b) => a.preco - b.preco)
            setProdutos(ps)
          }
          }>Enviar</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App
