import React from 'react'
import style from './Button.module.scss';
import classNames from 'classnames';

function Button(props) {
	const {children, deletar, onClick, adicionar, tipo='button', btnPecas} = props
	return (
		<>
			<button type={tipo}
			className={classNames({
				[style.button]: true,
				[style.deletar]: deletar === true,
				[style.adicionar]: adicionar === true,
				[style.btnPecas]: btnPecas === true
			})}
			onClick={onClick}>
				{children}
			</button>
		</>
	)
}

export default Button