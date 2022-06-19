import React from 'react'
import Imagem from '../../Asset/animacao.png'
import style from './Animacao.module.scss'

function Animacao() {
	return (
		<main className={style.main}>
			<img className={style.img} src={Imagem} alt="" />
		</main>
	)
}

export default Animacao