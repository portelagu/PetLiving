import './FeedbackContainer.css'

function FeedbackContainer(props){
    return(
        <div>
            <section className="feedback-container">
                <div className="feedback-user-profile">
                    <img src={props.icon} alt="imagem de perfil" />
                    <div className="feedback-user-informations">
                        <h1 className="feedback-user-name">{props.name}</h1>
                        <p className='feedback-user-date'>{props.date}</p>
                    </div>
                </div>
                <h1 className="feedback-user-text">{props.text}</h1>
            </section>
        </div>
    )
}

export default FeedbackContainer;