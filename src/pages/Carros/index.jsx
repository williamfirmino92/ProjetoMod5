import { useEffect, useState } from 'react'
import api from '../../services/axios'
import { useNavigate } from 'react-router-dom';
import style from './Carros.module.scss'
import Button from '../../components/Button';
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios';
import {HiUserAdd} from 'react-icons/hi'

function Carros() {
    const [pecas, setCarros] = useState([])
    const navigate = useNavigate()

	const obtemPecas = async () => {
		try {
			const response = await api.get('/carros')
			const listaCarros = response.data
			setCarros([...listaCarros])
		} catch (error) {
			console.log(error);
		}
	}

    const editarCarros = (id) => {
		navigate(`${id}`)
	}

    const deletarCarros = async (id) => {
        await axios({
            method: 'delete',
            url: 'https://oficina-mecanica-resilia.herokuapp.com/pecas',
            data: {
                id: id
            }
        });

        obtemPecas()
	}

    const novaPeca = () => {
		navigate('novo')
	}

    useEffect(() =>{
        obtemPecas()
    }, [])


    return(
            <div className={style.pecas}>
            <h2>Cadastrar carros</h2>
            <Button adicionar={true} onClick={() => novaPeca()}>
				<HiUserAdd size='18px' style={{ marginRight: '5px' }} />
					Incluir carro
			</Button>
            <table>
                <tbody >
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Qtd</th>
                        <th>Marca</th>                        
                        <th>Garantia</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                    </tr>
                
                {pecas.map( (peca, index) => {
                    return(
                        <tr key={index}>
                            <td>{peca.id}</td>
                            <td>{peca.nome}</td>
                            <td>{peca.quantidade}</td>
                            <td>{peca.marca}</td>
                            <td>{peca.garantia}</td>
                            <td>{peca.categoria}</td>
                            <td>R${peca.preço},00</td>
                            <td className={style.btns} >
                                <Button btnPecas = {true} onClick={() => editarPeca(peca.id)}>
                                    <AiFillEdit color='white' size='18px' style={{ marginRight: '5px' }} />
                                    Editar
                                </Button>

                                <Button btnPecas = {true} deletar={true} onClick={() => deletarPeca(peca.id)}>
                                    <AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
                                    Deletar 
                                </Button>
                            </td>
                            
                        </tr>
                )})}
                </tbody>
            </table>
        </div>  
    )
}

export default Carros