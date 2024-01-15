import { Card } from "../Card/Card"

const CardContainer =({title,itemList})=>{
    
    return(
        <div className="infoContainer" id="modes">
            <h2>{title}</h2>
            <h3 className="subtitle">*Todos los proyectos están hosteados en servidores gratuitos de Google Cloud*</h3>
            <div className="cardContainer">
                {itemList.map(item => <Card key={item.id} item={item} />)}
            </div>
        </div>   
        
    )
}

export {CardContainer}