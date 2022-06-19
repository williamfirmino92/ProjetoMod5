import axios from "axios"
import React,{ useEffect, useState } from "react"
import style from './../../Alunos/EditarAluno/EditarAluno.module.scss'
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button';

function EditarCarro() {
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [preço, setPreco] = useState(0)
    const [marca, setMarca] = useState('')
    const [garantia, setGarantia] = useState(0)

    const {id} = useParams()
    useEffect(() =>{
        const pegaPeca = async () => {
            axios.get('https://oficina-mecanica-resilia.herokuapp.com/pecas/atributos')
                .then(response => {
                    const peca = response.data.filter((peca) => peca.id == id)
                    console.log(peca[0])
                    setNome(peca[0].nome)
                    setQuantidade(peca[0].quantidade)
                    setCategoria(peca[0].categoria)
                    setPreco(peca[0].preço)
                    setMarca(peca[0].marca)
                    setGarantia(peca[0].garantia)
                })
        }
        pegaPeca()
    }, [])
    

   

    const alterarPeca = async (e) => {
		e.preventDefault()
		await axios({
            method: 'put',
            url: 'https://oficina-mecanica-resilia.herokuapp.com/pecas/',
            data: {
                dados:{id: id},
                dadosNovos:{
                    nome: nome,
                    quantidade: quantidade,
                    categoria: categoria,
                    preço: preço,
                    marca: marca,
                    garantia: garantia
                }
            }
        })
        window.location.href = '/pecas'
	}

    return(
        <main className={style.principal}>
			<h2>Editar Peça</h2>
			<form form action="" onSubmit={alterarPeca} className={style.form} >
				<section className={style.form__secao}>
					<label htmlFor="nome">Nome</label>
					<input type="text" id='nome' value={nome} onChange={(e) => setNome( e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="quantidade">Quantidade</label>
					<input type="number" id="uantidade" value={quantidade} onChange={(e) => setQuantidade( e.target.value)} />
				</section>
				<section className={style.form__secao}>
					<label htmlFor="categoria">Categoria</label>
					<input type="text" id='categoria' value={categoria} onChange={(e) => setCategoria( e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="preco">Preço</label>
					<input type="number" id='preco' value={preço}  onChange={(e) => setPreco( e.target.value)}/>
				</section>
                <section className={style.form__secao}>
					<label htmlFor="marca">Marca</label>
					<input type="text" id='marca' value={marca} onChange={(e) => setMarca( e.target.value)}/>
				</section>
                <section className={style.form__secao}>
					<label htmlFor="Garantia">Garantia</label>
					<input type="number" id='Garantia' value={garantia} onChange={(e) => setGarantia(e.target.value)}/>
				</section>
				<Button tipo='submit' adicionar={true}>Alterar</Button>
                <center><a href="/pecas">voltar</a></center>
			</form>
		</main>
    )
}

export default EditarCarro