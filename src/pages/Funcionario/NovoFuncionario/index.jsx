import React, { useState } from 'react';
import './NovoFuncionario.css';
import api from '../../../services/axios';

function NovoFuncionario() {
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

	const sendDados = async (e) => {
		e.preventDefault()
		const response = await api.post('/funcionario/populate', {
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
	return (
		<main>
			<form action="" onSubmit={sendDados}>
				<section className='form__secao'>
					<label htmlFor="">Nome do Funcionário:</label>
					<input type="text" onChange={(e) => setNome(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Telefone:</label>
					<input type="number" onChange={(e) => setTelefone(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Data de Admissão:</label>
					<input type="date" onChange={(e) => setAdmissao(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">PIS/PASEP:</label>
					<input type="text" onChange={(e) => setPis(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Cargo:</label>
					<input type="text" onChange={(e) => setCargo(e.target.value)}/>
				</section>
        <section className='form__secao'>
					<label htmlFor="">Data de Nascimento:</label>
					<input type="date" onChange={(e) => setNascimento(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">E-mail:</label>
					<input type="email"onChange={(e) => setEmail(e.target.value)} />
				</section>
				<section className='form__secao'>
					<label htmlFor="">Endereço: </label>
					<input type="text" onChange={(e) => setEndereco(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Cidade: </label>
					<input type="text" onChange={(e) => setCidade(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Estado: </label>
					<input type="text" onChange={(e) => setEstado(e.target.value)}/>
				</section>
				<button type="submit">Enviar</button>
			</form>
		</main>
	)
}

export default NovoFuncionario