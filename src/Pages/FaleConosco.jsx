import Footer from "../components/Footer/Footer";
import HeaderInterno from "../components/Header/HeaderInterno";
import './FaleConosco.css';
import React, { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import vetorCachorro from '../assets/imagens/vetorCachorro.svg'

function FaleConosco() {
    const telRef = useRef(null);
    const nomeRef = useRef(null);
    const emailRef = useRef(null);


    useEffect(() => {
        const formatTel = (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1)$2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        };

        telRef.current.addEventListener('input', formatTel);
    }, []);

    const formatName = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Confirmar Envio?",
            text: "Este é um e-mail que não poderá ser cancelado.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#009CDE",
            cancelButtonColor: "#575757",
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Enviado!",
                    text: "Seu e-mail foi enviado com sucesso. Entraremos em contato o mais rápido possível",
                    icon: "success"
                }).then(() => {
                    e.target.reset();
                });
            }
        });

    };


    return (
        <div>
            <HeaderInterno />
            <h1 className="faleconosco-form-title">Fale Conosco</h1>
            <main className="faleconosco-form">
                <section className="form-and-image">
                    <img src={vetorCachorro} alt="Vetor de um cachorro" />
                    <form className="contactform-form" onSubmit={handleSubmit}>
                        <div className="contactform-data-container">
                            <input type="text" id="nome" placeholder='Nome completo' className='contactform-input' ref={nomeRef} required onInput={formatName} />
                        </div>

                        <div className="contactform-data-container">
                            <input type="email" id="nome" placeholder='E-mail' className='contactform-input-two' ref={emailRef} required />
                            <input type="text" id="nome" placeholder='Telefone' className='contactform-input-two' ref={telRef} maxLength="14" minLength="14" required />
                        </div>

                        <div className="contactform-data-container">
                            <input type="text" id="assunto" placeholder='Assunto' className='contactform-input' required />
                        </div>

                        <div className="contactform-data-container">
                            <textarea type="text" id="mensagem" placeholder='Mensagem' className='contactform-message-input' required />
                        </div>

                        <input type="submit" value="Enviar" className='contactform-submit' />
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default FaleConosco;