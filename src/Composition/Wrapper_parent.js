
import React from "react"
function Wrapper_parent(props)
{
    let childrens=props.children// list of components
    let {name1, name2}=props // these props we are passing with <Wrapper_parent/>
    console.log(childrens)
    return(
        <div>
            <p>This is wrapper parent and I want to apply this text property to all my child components. I will pass some names
                as well to the child components as a props
            </p>
            {childrens.map((child)=>{
                return(
                React.cloneElement(child, {name1, name2})
                )
            })}
            
        </div>
    )
}
export default Wrapper_parent