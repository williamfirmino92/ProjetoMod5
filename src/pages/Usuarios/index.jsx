import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import api from '../../services/axios'
import style from './Usuarios.module.scss'
import {HiUserAdd} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import CardUsuario from '../../components/CardUsuario';

function Usuarios() {

	const [usuarios, setUsuarios] = useState([])
	const [loading, setLoading] = useState(false)
	const [input, setInput] = useState('')
	const [erro, setErro] = useState('')

	const navigate = useNavigate()

	const obtemUsuarios = async () => {
		setErro('')
		try {
			setLoading(true)
			const response = await api.get('/usuarios')
			const listaUsuarios = response.data
			setUsuarios([...listaUsuarios])
			setLoading(false)
		} catch (error) {
			console.log(error);
		}
	}

	const pesquisaCliente = (e) => {
		e.preventDefault()
		const encontraCliente = usuarios.filter(usuario => usuario.nome.toUpperCase().includes(input.toUpperCase()))
		encontraCliente ? setUsuarios([...encontraCliente]) & setErro('') : setErro('Não encontramos alguém com este nome.') & setUsuarios([])
	}

	const controlaInput = (valorInput) => {
		valorInput.length === 0 ? obtemUsuarios() : setInput(valorInput)
	}

	const deletarUsuario = async (id) => {
		await api.delete(`/usuarios/${id}`)
		obtemUsuarios()
	}

	const novoUsuario = () => {
		navigate('novo')
	}

	const editarUsuario = (id) => {
		navigate(`${id}`)
	}

	useEffect(() => {
		obtemUsuarios()
	}, [])

	return (
		<main className={style.principal}>
			<div className={style.usuario__novo}>
				<Button adicionar={true} onClick={() => novoUsuario()}>
				<HiUserAdd size='18px' style={{ marginRight: '5px' }} />
					Adicionar um novo usuário
				</Button>
			</div>
			<form className={style.form__pesquisa} onSubmit={pesquisaCliente}>
				<input type="text" placeholder='Insira um nome' onChange={(e) => controlaInput(e.target.value)}/>
				<Button tipo='submit'>Pesquisar</Button>
			</form>
			{loading &&
			<h2 className={style.loading}>Estamos carregando...</h2>
			}
			{erro && 
				<h3>{erro}</h3>
			}
			<section className={style.usuarios}>
			{usuarios.map(usuario => (
				<CardUsuario key={usuario.id} usuario={usuario} deletarUsuario={deletarUsuario} editarUsuario={editarUsuario}/>
			))}
			</section>
		</main>
	)
}

export default Usuarios