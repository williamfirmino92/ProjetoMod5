import React, {useState } from 'react';
import style from './../../Alunos/NovoAluno/NovoAluno.module.scss'
import Button from '../../../components/Button';
import axios from 'axios'

function CadastraCarro(params) {
    const [nome, setNome] = useState('')
	const [quantidade, setQuantidade] = useState(0)
	const [categoria, setCategoria] = useState('')
	const [preco, setPreco] = useState(0)
    const [marca, setMarca] = useState('')
	const [garantia, setGarantia] = useState(0)



    const cadastraPeca = async (e) => {
        e.preventDefault()
        await axios.post('https://projeto-m4.herokuapp.com/carros/', {
            nome: nome,
            preço: preco,
            categoria: categoria,
            quantidade: quantidade,
            marca: marca,
            garantia: garantia
        })

        window.location.href = '/carros'
    }

    return(
        <main className={style.principal}>
			<h2>Cadastro de Carro</h2>
			<form action="" onSubmit={cadastraPeca} className={style.form}>
				<section className={style.form__secao}>
					<label htmlFor="nome">Nome :</label>
					<input type="text" id='nome' onChange={(e) => setNome(e.target.value)} required/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="quantidade">Quantidade :</label>
					<input type="number" id='quantidade' onChange={(e) => setQuantidade(e.target.value)} />
				</section>
				<section className={style.form__secao}>
					<label htmlFor="categoria">Categoria :</label>
					<input type="text" id='categoria' onChange={(e) => setCategoria(e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="preco">Preço :</label>
					<input type="number" id = 'preco' onChange={(e) => setPreco(e.target.value)} required/>
				</section>
                <section className={style.form__secao}>
					<label htmlFor="marca">Marca :</label>
					<input type="text" id = 'marca' onChange={(e) => setMarca(e.target.value)} />
				</section>
                <section className={style.form__secao}>
					<label htmlFor="garantia">Garantia :</label>
					<input type="number" id = 'garantia' onChange={(e) => setGarantia(e.target.value)} />
				</section>
				<Button tipo='submit' adicionar={true} >Cadastrar</Button>
                <center><a href="/pecas">voltar</a></center>
			</form>
		</main>
    )
}

export default CadastraCarro