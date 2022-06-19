import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import api from '../../services/axios'
import style from './Alunos.module.scss'
import {HiUserAdd} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import CardAluno from '../../components/CardAluno';

function Alunos() {

	const [alunos, setAlunos] = useState([])
	const [loading, setLoading] = useState(false)
	const [input, setInput] = useState('')
	const [erro, setErro] = useState('')

	const navigate = useNavigate()

	const obtemAlunos = async () => {
		setErro('')
		try {
			setLoading(true)
			const response = await api.get('/alunos')
			const listaAlunos = response.data
			setAlunos([...listaAlunos])
			setLoading(false)
		} catch (error) {
			console.log(error);
		}
	}

	const pesquisaCliente = (e) => {
		e.preventDefault()
		const encontraCliente = alunos.filter(alunos => alunos.nome.toUpperCase().includes(input.toUpperCase()))
		encontraCliente ? setAlunos([...encontraCliente]) & setErro('') : setErro('Não encontramos alguém com este nome.') & setAlunos([])
	}

	const controlaInput = (valorInput) => {
		valorInput.length === 0 ? obtemAlunos() : setInput(valorInput)
	}

	const deletarAluno = async (id) => {
		await api.delete(`/alunos/${id}`)
		obtemAlunos()
	}

	const novoAluno = () => {
		navigate('novo')
	}

	const editarAluno  = (id) => {
		navigate(`${id}`)
	}

	useEffect(() => {
		obtemAlunos ()
	}, [])

	return (
		<main className={style.principal}>
			<div className={style.aluno}>
				<Button adicionar={true} onClick={() => novoAluno()}>
				<HiUserAdd size='18px' style={{ marginRight: '5px' }} />
					Adicionar um novo aluno
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
			<section className={style.alunos}>
			{alunos.map(aluno => (
				<CardAluno key={aluno.id} aluno={aluno} deletarAluno={deletarAluno} editarAluno={editarAluno}/>
			))}
			</section>
		</main>
	)
}

export default Alunos