import React, {Component} from 'react'
import Class_component_two from '../component/Class_component_two'
export default class Class_component extends Component{
    constructor(props)
    {
        super()
        this.state={brand:"abc",
    color:"red"}
    }
    changeColor()
    {
        this.setState({color:"blue"})
    }
   render()
   {
    return(
        <div>
            <h1>Hello world  the brand is {this.state.brand} and color is {this.state.color}</h1>
            <input type="button" onClick={()=>{this.changeColor()}}></input>
            <Class_component_two value="hello user"/>
        </div>
    )
   }
}