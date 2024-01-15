
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
            <p>#Datos para poder probarlo
            <br></br> 
                User: {item.acceso_adm.user} -  Password: {item.acceso_adm.password}
            <br></br> 
                User: {item.acceso_usr.user} -  Password: {item.acceso_usr.password}
            </p>
            :<p>#Deberá crearse <br></br> un usuario <br></br> para probarlo</p>}
            </div>
            </div>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Realizado con {item.info}</p>
            
            
        </div>
                
        
    )
}

export {Card}