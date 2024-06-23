import { useState } from "react";
import styles from "./App.module.css"

export default function Listagem({produtos}){
    return(
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
                      <td className={styles.textAlign}>R$ {Number(produto.preco).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
    )
  }