import ServiceContainerRight from './ServiceContainerRight/ServiceContainerRight';
import './Services.css';
import ServiceContainerLeft from './ServiceContainerLeft/ServiceContainerLeft';
import Image1 from '../../assets/imagens/service-image-1.svg'
import Image2 from '../../assets/imagens/service-image-2.svg'
import Image3 from '../../assets/imagens/service-image-3.svg'
import Image4 from '../../assets/imagens/service-image-4.svg'
import Image5 from '../../assets/imagens/service-image-5.svg'

function Services(){
    return(
        <div>
            <section className="services-section">
                <h1 className='section-title'>Nossos serviços</h1>
                <ServiceContainerRight title="Vacinação Protegida"
                text="Mantenha a saúde do seu pet sempre em dia com nosso serviço de vacinação. Oferecemos todas as vacinas essenciais, aplicadas por profissionais qualificados, garantindo proteção contra doenças e uma vida longa e saudável. Cuidar da imunização do seu pet é o primeiro passo para garantir seu bem-estar!"
                link="#"
                image={Image1}
                alt="Imagem de um cachorro"
                />

                <ServiceContainerLeft title="Pet Sitter: Cuidado em Casa"
                text="Vai viajar e não quer deixar seu pet em um hotel? Nosso serviço de Pet Sitter oferece cuidados no conforto da sua casa! Nossos profissionais cuidam da alimentação, higiene e diversão do seu amigo, garantindo que ele se sinta seguro enquanto você está fora."
                link="#"
                image={Image2}
                alt="Um homem fazendo carinho em um gato"
                />

<ServiceContainerRight title="Passeios Divertidos"
                text="Ofereça ao seu pet momentos de lazer com nossos passeios monitorados. Ideal para gastar energia e manter a saúde física e mental do seu pet em dia. Nossos passeadores experientes garantem segurança e diversão em cada caminhada!"
                link="#"
                image={Image3}
                alt="Imagem de um cachorro"
                />

<ServiceContainerLeft title="Banho e Tosa Premium"
                text="Deixe seu pet sempre limpo, cheiroso e com a pelagem impecável! Nosso serviço de banho e tosa é realizado por especialistas, usando produtos de qualidade para garantir conforto e cuidados especiais com a pele e o pelo do seu companheiro."
                link="#"
                image={Image4}
                alt="Imagem de um cachorro"
                />

<ServiceContainerRight title="Consulta Veterinária Completa"
                text="Cuide da saúde do seu pet com consultas veterinárias especializadas. Nossa equipe está pronta para diagnosticar, tratar e orientar em todas as fases da vida do seu animal. Com acompanhamento regular, você garante que seu pet esteja sempre saudável e bem cuidado."
                link="#"
                image={Image5}
                alt="Imagem de um cachorro"
                />


            </section>
        </div>
    )
}

export default Services;