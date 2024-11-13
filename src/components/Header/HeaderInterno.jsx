import logo from '../../assets/imagens/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom'; 

function HeaderInterno() {
  return (
    <div>
      <section className="header-section">
        <img src={logo} alt="" />
        <ul className="list">
          <li className="list-item"><Link to="/"  className="list-item-link">Início</Link></li>
          <li className="list-item"><Link to="/"  className="list-item-link">Sobre Nós</Link></li>
          <li className="list-item"><Link to="/"  className="list-item-link">Serviços</Link></li>
          <li className="list-item"><Link to="/" className="list-item-link">Avaliações</Link></li>
          <li className="list-item"><Link to="/fale-conosco" className="list-button-link">Entre em contato</Link></li>
        </ul>
      </section>
    </div>
  );
}

export default HeaderInterno;
