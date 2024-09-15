import { useEffect, useState } from "react"

function Wrap_func({children})
{
    let[error, setError]=useState(null)
    let handler=(error)=>{
        console.log("here")
        setError(error)
    }
    window.addEventListener("error",handler)

    if(error)
    {
        return(
            <div>
                <p>hello world {error}</p>
            </div>
        )
    }
    return children
    
}
export default Wrap_func