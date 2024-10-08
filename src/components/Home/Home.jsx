import HomeImage from '../../assets/imagens/home-image.svg'
import './Home.css'

function Home() {
    return (
        <div>
            <section className="home-section">
                <img src={HomeImage} alt="Imagem de um gato e cachorro" />
                <div className="home-information">
                    <h1 className="home-title">Seu Pet, Nosso Cuidado!</h1>
                    <p className="home-text">Na PetLiving, nós entendemos que seu pet é parte da família. Aqui, seu animal de estimação recebe atenção e carinho de profissionais dedicados, tudo com segurança e muito amor. Oferecemos serviços personalizados para garantir bem-estar, diversão e saúde. Deixe seu amigo peludo nas mãos de quem realmente se importa!</p>
                </div>
            </section>
        </div>
    )
}

export default Home;