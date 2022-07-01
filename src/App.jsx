import React from 'react'
import Header from './components/Header'
import Alunos from './pages/Alunos'
import Carros from './pages/Carros'
import EditarCarro from './pages/Carros/EditarCarro'
import CadastrarCarro from './pages/Carros/CadastrarCarro'
import Funcionario from './pages/Funcionario'
import Home from './pages/Home'
import NovoAluno from './pages/Alunos/NovoAluno'
import NovoFuncionario from './pages/Funcionario/NovoFuncionario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditarAluno from './pages/Alunos/EditarAluno'
import Fornecedores from './pages/Fornecedores'
import EditFuncionario from './pages/Funcionario/EditFuncionario'
import Footer from './components/Footer'
import Vendas from './pages/Vendas/Vendas'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/alunos'>
						<Route index element={<Alunos />} />
						<Route path='novo' element={<NovoAluno />} />
						<Route path=':id' element={<EditarAluno/>} />
					</Route>
					<Route path='/carros' element={<Carros />}/>
					<Route path='/carros/novo' element={<CadastrarCarro />} />
					<Route path='/carros/:id' element={<EditarCarro />} />
					<Route path='/fornecedores' element={<Fornecedores />} />
					<Route path='/funcionario' element={<Funcionario />} />
					<Route path='/funcionario/novo' element={<NovoFuncionario />} />
					<Route path='/funcionario/:id' element={<EditFuncionario />} />
					<Route path='/vendas' element={<Vendas />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
