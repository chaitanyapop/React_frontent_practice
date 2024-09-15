import React from "react"
import Class_comp_child from "./Class_comp_child"
class Class_comp_way extends React.Component{
    
    constructor()
    {
        super()
        this.state={
            count:1,
            name:"john"
        }
    }

    render()
    {
        console.log(this.state)
        return(
        <div>
            {/* <p>This is the Class component which shows using state manipulation</p>
            <p>The count is {this.state.count}</p> */}
            <Class_comp_child count={this.state.count}/>
            <button onClick={()=>this.setState({count:this.state.count, name:"chai"})}>Click me</button>
        </div>)
    }
}
export default Class_comp_way
/**
 * In this example we are going to do it in both ways.
 * 1. By manipulating the state and by keeping the state constant and will check whether it re-renders the same component or not
 * 2. By manipulating props and also by keeping the props same and will check whether it re-render the child component or not
 * 
 * in our example in setState we are creating a new object but the props which we are passing is a premitive value therefore it is a 
 * pass by value and original value comparison happens before re-rendering any component, if ot was a object then its refrence would have
 * checked.
 */