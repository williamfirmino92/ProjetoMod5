import React, { useEffect, useState } from 'react';
import style from './EditarUsuario.module.scss'
import api from '../../../services/axios';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button';

function EditarUsuario() {

	const {id} = useParams()

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [endereco, setEndereco] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')

	const enviarDadosAtualizados = async (e) => {
		e.preventDefault()
		const response = await api.put(`/usuarios/${id}`, {
			nome,
			email,
			endereco,
			cidade,
			estado
		})
		console.log(response)
	}
	
	useEffect(() => {
		const obtemDados = async() => {
			const response = await api.get(`/usuarios/${id}`)
			const {nome, email, endereco, cidade, estado } = response.data
			setNome(nome)
			setEmail(email)
			setEndereco(endereco)			
			setCidade(cidade)
			setEstado(estado)
		}
		obtemDados()
	}, [])
	
	return (
		<main className={style.principal}>
			<h2>Editar cliente</h2>
			<form action="" onSubmit={enviarDadosAtualizados} className={style.form}>
				<section className={style.form__secao}>
					<label htmlFor="nome">Digite seu nome</label>
					<input type="text" id='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="email">Digite seu email</label>
					<input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
				</section>
				<section className={style.form__secao}>
					<label htmlFor="endereco">Digite seu endereco</label>
					<input type="text" id='endereco' value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="cidade">Digite sua cidade</label>
					<input type="text" id='cidade' value={cidade} onChange={(e) => setCidade(e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="estado">Digite seu estado</label>
					<input type="text" id='estado' value={estado} onChange={(e) => setEstado(e.target.value)}/>
				</section>
				<Button tipo='submit' adicionar={true}>Enviar</Button>
			</form>
		</main>
	)
}

export default EditarUsuario
