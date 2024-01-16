import { useNavigate } from "react-router-dom"


const Language =()=>{
    const navigate= useNavigate()
    return(
        <>
        <div className="homeContainer">
            <h3 className="language">Seleccione idioma // Choose language</h3>
            <button className="button btnPrimary" onClick={()=>navigate("/home",{state:{from:1}})}><span >Español</span></button>
            <button className="button btnPrimary" onClick={()=>navigate("/home",{state:{from:null}})}><span >English</span></button>
        </div>
        </> 
    )
}

export {Language}