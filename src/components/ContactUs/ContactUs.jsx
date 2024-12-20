import './ContactUs.css'
import Image from '../../assets/imagens/contact-us-image.svg'
import { Link } from 'react-router-dom';

function ContactUs(){
    return(
        <div>
            <section className="contactus-section">
                <img src={Image} alt='imagem de um gato'/>
                <h1 className="contactus-title">Estamos Aqui Para Ajudar</h1>
                <p className="contactus-text">Tem alguma dúvida ou precisa de mais informações sobre nossos serviços? Entre em contato conosco! Nossa equipe está pronta para atender você e seu pet com todo o carinho e atenção que merecem. Clique no botão abaixo e converse agora com o time!</p>
                <p className="contactus-button"><Link to="/fale-conosco" className="contactus-link">Entre em contato</Link></p>
            </section>
        </div>
    )
}

export default ContactUs;