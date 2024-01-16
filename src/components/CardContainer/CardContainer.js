import { Card } from "../Card/Card"

const CardContainer =({itemList,from})=>{
    
    return(
        <div className="infoContainer" id="modes">
             { from==1?<h2>Proyectos</h2>:<h2>Proyects</h2> }
             { from==1?
             <h3 className="subtitle">*Todos los proyectos están hosteados en servidores gratuitos de Google Cloud*</h3>
             :
             <h3 className="subtitle">*All of these projects are hosted freely in Google Cloud*</h3>
             }
            <div className="cardContainer">
                {itemList.map(item => <Card key={item.id} item={item} from={from} />)}
            </div>
        </div>   
        
    )
}

export {CardContainer}