import logo from '../../assets/imagens/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div>
      <section className="header-section">
        <img src={logo} alt="" />
        <ul className="list">
          <li className="list-item"><a href="#home" className="list-item-link">Início</a></li>
          <li className="list-item"><a href="#about" className="list-item-link">Sobre Nós</a></li>
          <li className="list-item"><a href="#services" className="list-item-link">Serviços</a></li>
          <li className="list-item"><a href="#feedback" className="list-item-link">Avaliações</a></li>
          <li className="list-item"><Link to="/fale-conosco" className="list-button-link">Entre em contato</Link></li>
        </ul>
      </section>
    </div>
  );
}

export default Header;
