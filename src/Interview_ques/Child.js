import { useState } from "react"
function Child(props)
{
    let [input_data,setInput]=useState(null)
    let json_data=props.data
    let [flag, setFlag]=useState(false)
    let [title,setTitle]=useState(null)
    
    function onSubmitID()
    {
        json_data.map((data)=>{
            if(data.id==input_data)
            {
                setFlag(true)
                setTitle(data.title)
            }
        })
    }
    return(
        <div>
            <p>I am inside child</p>
            <input type="text" placeholder="Enter the ID value" onChange={(e)=>{
                setInput(e.target.value)
            }}></input>
            <button onClick={onSubmitID}>Submit</button>
            {flag &&<div>
                <p>The title is:</p>
                <p>{title}</p>
            </div>}
        </div>
    )
}
export default Child