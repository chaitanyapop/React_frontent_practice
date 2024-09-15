import { useState } from "react"
import Func_comp_child from "./Func_comp_child"

function Func_comp_way()
{
    let [count, setCount]=useState(0)
    let [name, setName]=useState("Chaitanya")
    console.log("Running a parent component")
    return(
        <div>
        <Func_comp_child name={name}/>
        <p>The counter value is: {count} </p>
        <button onClick={()=>{
            setCount(count+1)
        }}>Counter</button>
        <button onClick={()=>{setName("xyz")}}>Change Name</button>
        </div> 
        )
    
}
export default Func_comp_way
