import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import api from '../../services/axios'
import './Funcionario.css';
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import {HiUserAdd} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

function funcionario() {

	const [funcionario, setFuncionario] = useState([])

	const navigate = useNavigate()

	const obtemFuncionario = async () => {
		try {
			const response = await api.get('/funcionario')
			const listaFuncionario = response.data
			console.log(response.data)
			setFuncionario([...listaFuncionario])
		} catch (error) {
			console.log(error);
		}
	}

	const apagarFuncionario = async (id) => {
		await api.delete(`/funcionario/${id}`)
		obtemFuncionario()
	}

	const novoFuncionario = () => {
		navigate('novo')
	}

	const editFuncionario = (id) => {
		navigate(`${id}`)
	}

	useEffect(() => {
		obtemFuncionario()
	}, [])

	return (
		<main>
			<div className='funcionario__novo'>
				<Button adicionar={true} onClick={() => novoFuncionario()}>
				<HiUserAdd size='18px' style={{ marginRight: '5px' }} />
					Adicionar um novo Funcionário
				</Button>
			</div>
			<div className='funcionario'>
			{funcionario.map(funcionario => (
				<div key={funcionario.id} className='funcionario'>
					<div className='header'>
						<h2>{funcionario.nome}</h2>
					</div>
					<div className='body'>
						<p><span>Email: </span>{funcionario.email}</p>
						<p><span>Endereço: </span>{funcionario.endereco}</p>
						<p><span>Cidade: </span>{funcionario.cidade}, {funcionario.estado}</p>
						<p>{funcionario.id}</p>
					</div>
					<div className='footer'>
						<Button deletar={true} onClick={() => apagarFuncionario(usuario.id)}>
							<AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
							Deletar
						</Button>
						<Button onClick={() => editFuncionario(usuario.id)}>
							<AiFillEdit color='white' size='18px' style={{ marginRight: '5px' }} />
							Editar
						</Button>
					</div>
				</div>
			))}
			</div>
		</main>
	)
}

export default funcionario