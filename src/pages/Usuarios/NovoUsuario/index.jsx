import React, { useState } from 'react';
import style from './NovoUsuario.module.scss'
import Button from '../../../components/Button';
import api from '../../../services/axios';
import { useNavigate } from 'react-router-dom';

function NovoUsuario() {
	const navigate = useNavigate()
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [endereco, setEndereco] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')

	const enviarDados = async (e) => {
		e.preventDefault()
		const response = await api.post('/usuarios', {
			nome,
			email,
			endereco,
			cidade,
			estado
		})
		response.status === 200 ? navigate('/usuarios') : setErro('Algum erro!')
	}	
	return (
		<main className={style.principal}>
			<h2>Cadastre um novo cliente</h2>
			<form action="" onSubmit={enviarDados} className={style.form}>
				<section className={style.form__secao}>
					<label htmlFor="nome">Digite seu nome</label>
					<input type="text" id='nome' onChange={(e) => setNome(e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="email">Digite seu email</label>
					<input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
				</section>
				<section className={style.form__secao}>
					<label htmlFor="endereco">Digite seu endereco</label>
					<input type="text" id='endereco' onChange={(e) => setEndereco(e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="cidade">Digite sua cidade</label>
					<input type="text" id = 'cidade' onChange={(e) => setCidade(e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="estado">Digite seu estado</label>
					<input type="text" id='estado' onChange={(e) => setEstado(e.target.value)}/>
				</section>
				<Button tipo='submit' adicionar={true}>Enviar</Button>
			</form>
		</main>
	)
}

export default NovoUsuario