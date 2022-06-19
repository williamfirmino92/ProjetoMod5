import React from 'react'
import style from './CardAluno.module.scss';
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import Button from '../Button';

function CardAlunos(props) {
	const {aluno, editarAluno, deletarAluno} = props
	return (
		<>
				<div className={style.aluno}>
					<div className={style.header}>
						<h2>{aluno.nome}</h2>
					</div>
					<div className={style.body}>
						<p><span>Email: </span>{aluno.email}</p>
						<p><span>Endereço: </span>{aluno.endereco}</p>
						<p><span>Cidade: </span>{aluno.cidade}, {aluno.estado}</p>
					</div>
					<div className={style.footer}>
						<Button deletar={true} onClick={() => deletarAluno(aluno.id)}>
							<AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
							Deletar
						</Button>
						<Button onClick={() => editarAluno(aluno.id)}>
							<AiFillEdit color='white' size='18px' style={{ marginRight: '5px' }} />
							Editar
						</Button>
					</div>
				</div>
		</>
	)
}

export default CardAlunos