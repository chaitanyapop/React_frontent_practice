import React from "react"
function Func_comp_child(props)
{
    console.log("Running a child component")
    return(
        <div>
            <p>This is the child component</p>
            <p>My name is {props.name}</p>
        </div>
        )
    
}   
export default React.memo(Func_comp_child)
