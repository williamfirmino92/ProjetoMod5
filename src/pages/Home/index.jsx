import React, { useEffect, useState } from 'react'
import style from './Home.module.scss';
import imagemCarros from '../../Asset/AdobeStock_95004721.jpeg'
import imagemMotos from '../../Asset/AdobeStock_143898014.jpeg'
import imagemUsuarios from '../../Asset/AdobeStock_124784412.jpeg'
import imagemAlunos from '../../Asset/AdobeStock_106706618.jpeg'
import imagemFornecedores from "../../Asset/AdobeStock_140227570.jpeg"
import imagemFuncionarios from '../../Asset/AdobeStock_369394082.jpeg'
import imagemVendas from "../../Asset/AdobeStock_119809557.jpeg"
import { useNavigate } from 'react-router-dom';
import Animacao from '../../components/Animacao';

function Home() {

	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)

	const itens = [
		{
			label: 'Carros',
			id: 0,
			rota: '/carros',
			imagem: imagemCarros
		},
		{
			label: 'Motos',
			id: 1,
			rota: '/carros',
			imagem: imagemMotos
		},
		{
			label: 'Alunos',
			id: 2,
			rota: '/alunos',
			imagem: imagemAlunos
		},

		{
			label: 'Turmas',
			id: 2,
			rota: '/usuarios',
			imagem: imagemUsuarios
		},

		{
			label: 'RH',
			id: 2,
			rota: '/usuarios',
			imagem: imagemUsuarios
		},
		
		{
			label: 'Financeiro',
			id: 3,
			rota: '/usuarios',
			imagem: imagemFornecedores
		},
		{
			label: 'Funcionários',
			id: 4,
			rota: '/funcionario',
			imagem: imagemFuncionarios
		},
		{
			label: 'Vendas',
			id: 5,
			rota: '/vendas',
			imagem: imagemVendas
		}
	]

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}, [])

	return (
		<>
			{loading ?
				<Animacao /> :
				<main className={style.principal}>
					<h2 >SIU - SISTEMA DE INFORMAÇÕES ÚNICO</h2>
					<section className={style.secoes}>
						{itens.map(item => (
							<div key={item.id} className={style.secao} onClick={() => navigate(`${item.rota}`)}>
								<div className={style.secao__img}>
									<img src={item.imagem} alt="" />
								</div>
								<h4 className={style.secao__titulo}>{item.label}</h4>
							</div>
						))}
					</section>
				</main>
			}
		</>
	)
}

export default Home