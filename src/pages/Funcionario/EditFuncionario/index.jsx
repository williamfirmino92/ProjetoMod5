import React, { useEffect, useState } from 'react';
import './editfuncionario.css';
import api from '../../../services/axios';
import { useParams } from 'react-router-dom';

function EditFuncionario() {

	const {id} = useParams()

	const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState ('')
  const [admissão, setAdmissao] = useState('')
  const [pis, setPis] = useState ('')
  const [cargo, setCargo] = useState ('')
  const [nascimento, setNascimento] = useState ('')
	const [email, setEmail] = useState('')
	const [endereco, setEndereco] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')

	const sendDataUpdate = async (e) => {
		e.preventDefault()
		const response = await api.put(`/funcionario/${id}`, {
      nome,
      telefone, 
      admissão, 
      pis,
      cargo,
      nascimento,
			email,
			endereco,
			cidade,
			estado
		})
		console.log(response)
	}
	
	useEffect(() => {
		const obtemDados = async() => {
			const response = await api.get(`/funcionario/${id}`)
			const {nome, telefone, admissão, pis, cargo, nascimento, email, endereco, cidade, estado } = response.data
			setNome(nome)
      setTelefone (telefone)
      setAdmissao (admissão)
      setPis (pis)
      setCargo (cargo)
      setNascimento(nascimento)
			setEmail(email)
			setEndereco(endereco)			
			setCidade(cidade)
			setEstado(estado)
		}
		obtemDados()
	}, [])
	
	return (
		<main>
			<form action="" onSubmit={sendDataUpdate}>
				<section className='form__secao'>
					<label htmlFor="">Nome:</label>
					<input type="text" 
					value={nome} 
					onChange={(e) => setNome(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Telefone:</label>
					<input type="number" 
					value={telefone} 
					onChange={(e) => setTelefone(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Admissão:</label>
					<input type="date" 
					value={admissão} 
					onChange={(e) => setAdmissao(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">PIS/PASEP:</label>
					<input type="text" 
					value={pis} 
					onChange={(e) => setPis(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Cargo:</label>
					<input type="text" 
					value={cargo} 
					onChange={(e) => setCargo(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Data de Nascimento:</label>
					<input type="text" 
					value={nascimento} 
					onChange={(e) => setNome(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">E-mail</label>
					<input type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)} />
				</section>
				<section className='form__secao'>
					<label htmlFor="">Endereço:</label>
					<input type="text"
					value={endereco}
					onChange={(e) => setEndereco(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Cidade:</label>
					<input type="text" 
					value={cidade}
					onChange={(e) => setCidade(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Estado</label>
					<input type="text" 
					value={estado}
					onChange={(e) => setEstado(e.target.value)}/>
				</section>
				<button type="submit">Enviar</button>
			</form>
		</main>
	)
}

export default EditFuncionario 