import { React, useEffect, useState } from "react";
import api from "../../services/axios";

export default () => {
  const [vendas, setVendas] = useState([])


  const GetVendas = async () => {

    const req = await api.get('/vendas');
    const res = req.data;
    setVendas([...res]);
  }

  const DeleteVendas = async (id) => {

    await api.delete(`/usuarios/${id}`);
    GetVendas();
  }

  const Updatevendas = (id) => {
    navigate(`${id}`)
  }


  useEffect(() => {
    GetVendas();
  }, [])


  return (
    <main>
      <h1>Lista de Vendas</h1>
      <table>
        <tr>
          <td>Id</td>
          <td>Nome</td>
          <td>Preço</td>
          <td>Data</td>

        </tr>
        {vendas.map((vendas, index) => {
          return (
            <tr key={index}>
              <td>{vendas.id}</td>
              <td>{vendas.nome}</td>
              <td>{vendas.preco}</td>
              <td>{vendas.data}</td>

            </tr>
          )
        })}
      </table>


    </main>
  )

}