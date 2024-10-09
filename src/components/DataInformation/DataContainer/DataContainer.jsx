import './DataContainer.css'

function DataContainer(props){
    return(
        <div>   
            <div className="data-container">
                <h1 className="data-title">{props.title}</h1>
                <h3 className="data-subtitle">{props.subtitle}</h3>
                <p className="data-text">{props.text}</p>
            </div>
        </div>
    )
}

export default DataContainer;