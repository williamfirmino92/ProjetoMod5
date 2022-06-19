import React from 'react'
import style from './CardUsuario.module.scss';
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import Button from '../Button';

function CardUsuario(props) {
	const {usuario, editarUsuario, deletarUsuario} = props
	return (
		<>
				<div className={style.usuario}>
					<div className={style.header}>
						<h2>{usuario.nome}</h2>
					</div>
					<div className={style.body}>
						<p><span>Email: </span>{usuario.email}</p>
						<p><span>Endereço: </span>{usuario.endereco}</p>
						<p><span>Cidade: </span>{usuario.cidade}, {usuario.estado}</p>
					</div>
					<div className={style.footer}>
						<Button deletar={true} onClick={() => deletarUsuario(usuario.id)}>
							<AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
							Deletar
						</Button>
						<Button onClick={() => editarUsuario(usuario.id)}>
							<AiFillEdit color='white' size='18px' style={{ marginRight: '5px' }} />
							Editar
						</Button>
					</div>
				</div>
		</>
	)
}

export default CardUsuario