import AboutImage from '../../assets/imagens/about-image.svg';
import './About.css'

function About() {
    return (
        <div className="about">
            <section className="about-container">
                <div className="about-title-subtitle">
                    <h1 className='about-title'>Sobre a PetLiving</h1>
                    <h4 className="about-subtitle">Quem nós somos?</h4>
                </div>
                <div className="about-informations">
                    <div>
                        <p className="about-text">
                            Na PetLiving, somos comprometidos em oferecer o melhor em serviços para o bem-estar e felicidade dos seus animais de estimação. Desde cuidados básicos até serviços especializados, nossa equipe é formada por profissionais treinados e experientes, prontos para atender cada necessidade do seu pet com carinho e responsabilidade.<br></br><br></br>
                        </p>
                        <p className="about-text">
                            Acreditamos que cada animal é único, e é por isso que nossos serviços são personalizados para garantir o conforto, segurança e satisfação do seu melhor amigo. Seja um banho relaxante, um dia de cuidados especiais ou um passeio divertido, nós estamos aqui para cuidar com o mesmo amor que você oferece em casa.<br></br><br></br>
                        </p>
                        <p className="about-text">
                            Nosso objetivo é criar uma experiência onde os pets se sintam seguros e amados, e seus tutores possam ter tranquilidade sabendo que seus companheiros estão em boas mãos.
                        </p>
                    </div>
                    <img src={AboutImage} alt="Imagem de um mockup do petliving " />
                </div>
            </section>
        </div>
    )
}

export default About;