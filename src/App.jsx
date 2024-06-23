
import { useState } from "react"
import styles from "./App.module.css"

function App() {
  const listaInicial = [
    { nome: "Nome4", descricao: "Descrição", preco: 1.25, disponivel: false },
    { nome: "Nome2", descricao: "Descrição", preco: 3.75, disponivel: true },
    { nome: "Nome3", descricao: "Descrição", preco: 6.35, disponivel: true },
    { nome: "Nome1", descricao: "Descrição", preco: 9.99, disponivel: false }
  ]
  const [produtos, setProdutos] = useState(listaInicial)
  const [produto, setProduto] = useState({ nome: "", descricao: "", preco: 0, disponivel: false })

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
        <form onSubmit={(event) => event.preventDefault()}>
          <h2>Cadastre o produto</h2>

            <div>
              <label htmlFor="name">Nome do produto: </label>
              <input className={styles.input} type="text" id="name" value={produto.nome} onChange={(event) => setProduto({ ...produto, nome: event.target.value })} />
            </div>
            <div>
              <label htmlFor="descrição">Descrição do produto: </label>
              <input className={styles.input} type="text" id="descrição" value={produto.descricao} onChange={(event) => setProduto({ ...produto, descricao: event.target.value })} />
            </div>
            <div>
              <label htmlFor="custo">Custo: </label>
              <input className={styles.input} type="number" id="custo" value={produto.preco} onChange={(event) => setProduto({ ...produto, preco: event.target.value })} />
            </div>
            <div>
              <label htmlFor="disponivel">Tem no estoque: </label>
              <input className={styles.input} type="checkbox" name="disponivel" id="disponivel" value={produto.disponivel} onChange={(event) => setProduto({ ...produto, disponivel: event.target.checked })} />
            </div>
            <button onClick={(event) => {
              let ps = [...produtos, produto]
              ps.sort((a, b) => a.preco - b.preco)
              setProdutos(ps)
            }
            }>Cadastrar Produto</button>
          </form>
        </div>
        <div className={styles.box}>
          <h2>Veja o resultado</h2>
          <table className={styles.table}>
            <thead><tr><td>Nome</td><td className={styles.textAlign}> Preço</td></tr></thead>
            <tbody>
              {produtos.map((produto, index) => {
                return (<tr key={index}><td>{produto.nome}</td><td className={styles.textAlign}>R$:{produto.preco}</td></tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
