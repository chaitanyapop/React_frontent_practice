import React, {Component} from 'react'
import Class_component from './Class_component'
class Class_component_two extends Component
{
    constructor(props)
    {
        super()
        this.state={value:props.value}
    }
    render()
    {
        return(
            <>
                <p>The value is {this.state.value} </p>
            </>
        )
    }
}
export default Class_component_two