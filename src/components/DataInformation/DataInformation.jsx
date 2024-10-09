import DataContainer from './DataContainer/DataContainer';
import './DataInformation.css'

function DataInformation(){
    return (
        <div>
            <section className="data-information-section">
                <DataContainer title="5000+" subtitle="Clientes atendidos" text="Nossos serviços ja foram fornecidos para mais de 5.000 clientes."/>
                <DataContainer title="1500+" subtitle="Reviews 5 estrelas" text="Estamos orgulhosos de contar com mais de 1.500 reviews 5 estrelas."/>
                <DataContainer title="60+" subtitle="Colaboradores" text="Temos mais de 60 colaboradores no nosso time."/>
            </section>
        </div>
    )
}

export default DataInformation;