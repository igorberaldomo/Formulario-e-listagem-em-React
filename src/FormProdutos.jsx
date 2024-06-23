import { useState } from "react"
import styles from "./App.module.css"

export default function FormProduto({atualiza, produtos}) {
    const [produto, setProduto] = useState({nome: "", descricao: "", preco: 0, disponivel: false })
    return (
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
                      atualiza(ps)
                    }
                    }>Cadastrar Produto</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>
        </div>
      </div>
    )
  }
  