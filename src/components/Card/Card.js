
//import imgUsuario from '../../img/user.png'

const Card =({item,from})=>{

    return(
        
        <div className="card">
{          from==1?  
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
                    :<p>#Deberá crearse <br></br> un usuario <br></br> para probarlo</p>
                    }
                </div>
            </div>
            

            :

            <div className="card card-ppal">
                <div>
                    <h1 className="card-title">{item.name}</h1>
                    <a href={item.link}>Link to the Proyect</a>
                </div>
                <div>
                    {item.id!=1?
                    <p>#To be able to test it
                    <br></br> 
                        User: {item.acceso_adm.user} -  Password: {item.acceso_adm.password}
                    <br></br> 
                        User: {item.acceso_usr.user} -  Password: {item.acceso_usr.password}
                    </p>
                    :<p>#You must create <br></br> a user<br></br> to test it</p>
                    }
                </div>
                
            </div>}
            <p className="card-text">{item.description}</p>
            {from==1?
                <p className="card-text">Realizado con {item.info}</p>
                :
                <p className="card-text">Developed  with {item.info}</p>
            }
        </div>



                
                
        
    )
}

export {Card}