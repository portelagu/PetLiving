import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Feedback.css'
import FeedbackContainer from './FeedbackContainer/FeedbackContainer';
import icon1 from '../../assets/icons/user-icon-1.svg'
import icon2 from '../../assets/icons/user-icon-2.svg'
import icon3 from '../../assets/icons/user-icon-3.svg'
import icon4 from '../../assets/icons/user-icon-4.svg'

function Feedback() {
    return (
        <div>
            <div className='yellow-line'></div>
            <div className="feedback-title-subtitle">
                <h1 className="feedback-title">Feedback dos Nossos Clientes</h1>
                <p className="feedback-subtitle">Veja como cuidamos com carinho e dedicação dos pets de quem confia na PetLiving</p>
            </div>

            <section className="feedback-section">
                <Swiper
                    slidesPerView={3}
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-navigation-color": "#FFF",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    loop={true}
                >
                    <SwiperSlide>
                        <FeedbackContainer
                            icon={icon1}
                            name="Luana Queiroz"
                            date="Cliente a 2 meses"
                            text='"Eu simplesmente amo a PetLiving! O atendimento foi excepcional desde o primeiro contato, e meu cachorro, Max, voltou para casa tão feliz e cheirosinho após o banho e tosa. A equipe realmente demonstra carinho e cuidado com os pets, tratando cada um como se fosse da família."' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeedbackContainer
                            icon={icon2}
                            name="João Pereira"
                            date="Cliente a 1 ano e 5 meses"
                            text='"A PetLiving é simplesmente maravilhosa! Levei meu gato, Felix, para vacinação e fiquei impressionado com a atenção e carinho da equipe. Eles explicaram todo o processo e fizeram com que eu me sentisse tranquilo. É ótimo saber que meu pet está em boas mãos. Recomendo de olhos fechados!"' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <FeedbackContainer
                            icon={icon3}
                            name="Karina Costa"
                            date="Cliente a 9 meses"
                            text='"Simplesmente amei a experiência com a PetLiving! Deixei meu cachorro, Buddy, para um dia de cuidados e ele voltou tão feliz! A equipe foi extremamente atenciosa e me enviou atualizações ao longo do dia. É ótimo saber que meu pet está seguro e bem tratado. Vou sempre escolher a PetLiving para os cuidados do meu Buddy!"' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <FeedbackContainer
                            icon={icon4}
                            name="Clara Aguiar"
                            date="Cliente a 2 anos"
                            text='"Experiência incrível com a PetLiving! Deixei meu gato, Simba, para um check-up e a equipe foi fantástica. Eles foram muito cuidadosos e atenciosos, explicando cada passo do atendimento. Agradeço por cuidarem tão bem do meu pequeno. Agora, sinto que ele está saudável e feliz.”'  />
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}

export default Feedback;