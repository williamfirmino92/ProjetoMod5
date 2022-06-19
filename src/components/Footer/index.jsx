import React from 'react'
import style from './Footer.module.scss';

function Footer() {
	return (
		<footer className={style.footer}>
			<h6>Desenvolvido por: José William Firmino Bezerra</h6>
			<h3>Contatos:</h3>
			<ul>
            <li><a href="tel:+551199999999">+55 21 9999-9999</a></li>
            <li><a href="mailto:contato@autoescola.com.br">contato@autoescola.com.br</a></li>
            <li>Estrada Santa Marinha, 411 - Copacabana</li>
            <li>Riode Janeiro - RJ</li>
          </ul>
		</footer>
	)
}

export default Footer