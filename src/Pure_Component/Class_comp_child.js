import React from "react"
class Class_comp_child extends React.PureComponent
{
    render()
    {
        console.log("re-renering child class component")
        return(
            <div>
                <p>This is the Child Class component which shows using state manipulation</p>
                <p>The count is {this.props.count}</p>
            </div>
        )
    }
}
export default Class_comp_child