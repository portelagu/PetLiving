import logo from '../../assets/imagens/logo.svg'
import './Header.css'

function Header(){
    return(
        <div>
            <section className="header-section">
                <img src={logo} alt="" />
                <ul className="list">
                    <li className="list-item"><a href="#" className="list-item-link">Início</a></li>
                    <li className="list-item"><a href="#" className="list-item-link">Sobre Nós</a></li>
                    <li className="list-item"><a href="#" className="list-item-link">Serviços</a></li>
                    <li className="list-item"><a href="#" className="list-item-link">Avaliações</a></li>
                    <li className="list-item"><a href="#" className="list-button-link">Entre em contato</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Header;