import React from 'react';
import style from './Header.module.scss';
import Logo from '../../Asset/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className={style.headerbg}>
			<div  onClick={() => navigate('/')}>
      <img className={style.logo} src={Logo} width="200" height="32" alt="" />
      <div className={style.header}>
        <div className={style.container}>
          <nav aria-label="primaria">
            <ul className={style.headermenu}>
              <li class="nav-item">
                <a className={style.headermenua} href="servicos.html">Serviços</a>
              </li>
              <li class="nav-item">
                <a className={style.headermenua} href="cadastro.html">Cadastro</a>
              </li>
              <li class="nav-item">
                <a className={style.headermenua} href="contato.html">Contato</a>
              </li>
              <li class="nav-item">
                <a className={style.headermenua} href="login.html">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
			</div>
    </header>
  );
}

export default Header;
