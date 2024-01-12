
//import imgUsuario from '../../img/user.png'

const Card =({item})=>{

    return(
        
        <div className="card">
            <div className="card card-ppal">
            <div>
            <h1 className="card-title">{item.name}</h1>
            <a href={item.link}>Link al Proyecto</a>
            </div>
            <div>
            {item.id!=1?
            <p>Datos para poder probarlo<br></br> User: {item.acceso.user} -  Password:{item.acceso.password} </p>
            :<p>Deberá crearse un Usuario</p>}
            </div>
            </div>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Realizado con {item.info}</p>
            
            
        </div>
                
        
    )
}

export {Card}