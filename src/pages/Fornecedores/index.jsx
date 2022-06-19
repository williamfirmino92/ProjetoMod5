import { React, useEffect, useState } from "react";
import api from "../../services/axios";
import Button from '../../components/Button/index';
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'




export default () => {
    const [fornecedor, setFornecedor] = useState([])


    const GetFornecer = async () => {

        const req = await api.get('/fornecedor');
        const res = req.data;
        setFornecedor([...res]);
    }

     const DeleteFornecer = async (id) => {

         await api.delete(`/fornecedor/${id}`);
	 	GetFornecer(); 
     }

     const UpdateFornecer = (id) => {
	 	navigate(`${id}`)
	 }
   

    useEffect(() => {
        GetFornecer();
    }, [])


    return (
        <main>
            <h1>Lista de Fornecedores</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Fornecedor</td>
                    <td>Marca</td>
                    <td>Pedido</td>
                    <td>Qtd</td>
                    <td>Vencimento</td>
                    <td>Editar</td>
                    <td>Deletar</td>
                </tr>
                {fornecedor.map((fornecedor, index) => {
                    return (
                        <tr key={index}>
                            <td>{fornecedor.id}</td>
                            <td>{fornecedor.nome}</td>
                            <td>{fornecedor.marca}</td>
                            <td>{fornecedor.pedido}</td>
                            <td>{fornecedor.qtd}</td>
                            <td>{fornecedor.vencimento}</td>
                            <td><Button type="submit" adcionar={true} onClick={() =>UpdateFornecer(fornecedor.id)}>
                            <AiFillEdit color='white' size='18px' style={{ marginRight: '5px' }} />
							Editar
                            </Button>
                            </td>
                            <td>
                                <Button tipo="submit" deletar={true} onClick={()=> DeleteFornecer(fornecedor.id)}>
                                <AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
							Deletar
                                </Button>
                            </td>
                        </tr>
                    )
                })}
            </table>
            
            
        </main>
    )
}