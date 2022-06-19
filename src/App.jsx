import React from 'react'
import Header from './components/Header'
import Usuarios from './pages/Usuarios'
import Pecas from './pages/Pecas'
import EditarPeca from './pages/Pecas/EditarPeca'
import CadastrarPeca from './pages/Pecas/CadastrarPeca'
import Funcionario from './pages/Funcionario'
import Home from './pages/Home'
import NovoUsuario from './pages/Usuarios/NovoUsuario'
import NovoFuncionario from './pages/Funcionario/NovoFuncionario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditarUsuario from './pages/Usuarios/EditarUsuario'
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
					<Route path='/usuarios'>
						<Route index element={<Usuarios />} />
						<Route path='novo' element={<NovoUsuario />} />
						<Route path=':id' element={<EditarUsuario />} />
					</Route>
					<Route path='/pecas' element={<Pecas />}/>
					<Route path='/pecas/novo' element={<CadastrarPeca />} />
					<Route path='/pecas/:id' element={<EditarPeca />} />
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
