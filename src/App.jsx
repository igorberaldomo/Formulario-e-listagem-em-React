
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
            <table className={styles.tableForm}>
              <thead><tr><td colSpan={2}><h2>Cadastre o produto</h2></td></tr></thead>
              <tbody>
                <tr>
                  <td><label htmlFor="name">Nome do produto: </label></td>
                  <td><input className={styles.input} type="text" id="name" value={produto.nome} onChange={(event) => setProduto({ ...produto, nome: event.target.value })} /></td>
                </tr>
                <tr>
                  <td><label htmlFor="descrição">Descrição do produto: </label></td>
                  <td><input className={styles.input} type="text" id="descrição" value={produto.descricao} onChange={(event) => setProduto({ ...produto, descricao: event.target.value })} /></td>
                </tr>
                <tr>
                  <td><label htmlFor="custo">Custo: </label></td>
                  <td><input className={styles.input} type="number" id="custo" value={produto.preco} onChange={(event) => setProduto({ ...produto, preco: event.target.value })} /></td>
                </tr>
                <tr>
                  <td><label htmlFor="disponivel">Tem estoque: </label></td>
                  <td><input className={styles.input} type="checkbox" name="disponivel" id="disponivel" value={produto.disponivel} onChange={(event) => setProduto({ ...produto, disponivel: event.target.checked })} /></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2} className={styles.tdButton}>
                    <button onClick={(event) => {
                      let ps = [...produtos, produto]
                      ps.sort((a, b) => a.preco - b.preco)
                      setProdutos(ps)
                    }
                    }>Cadastrar Produto</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>
        </div>
        <div className={styles.box}>
          <h2>Veja o resultado</h2>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <td className={styles.td}>Nome</td><td className={styles.textAlign}> Preço</td></tr></thead>
            <tbody>
              {produtos.map((produto, index) => {
                return (
                  <tr key={index} className={styles.tr}>
                    <td className={styles.td}>{produto.nome}</td>
                    <td className={styles.textAlign}>R$ {Number(produto.preco).toLocaleString(undefined,{minimumFractionDigits: 2})}</td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
