import './ServiceContainerRight.css'

function ServiceContainerRight(props){
    return(
        <div>
            <section className='service-container'>
                <div className="container-informations-right">
                    <h1 className='container-title'>{props.title}</h1>
                    <p className='container-text'>{props.text}</p>
                    <p className='container-button'><a href={props.link} className='container-link'>Saiba Mais</a></p>
                </div>
            <img src={props.image} alt={props.desc}/>
            </section>
        </div>
    )
}

export default ServiceContainerRight;