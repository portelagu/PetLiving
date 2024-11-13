import './ServiceContainerLeft.css'

function ServiceContainerLeft(props){
    return(
        <div>
            <section className='service-container'>
            <img src={props.image} alt={props.desc}/>
                <div className="container-informations">
                    <h1 className='container-title'>{props.title}</h1>
                    <p className='container-text'>{props.text}</p>
                    <p className='container-button'><a href={props.link} className='container-link' target="_blank">Saiba Mais</a></p>
                </div>
            </section>
        </div>
    )
}

export default ServiceContainerLeft;