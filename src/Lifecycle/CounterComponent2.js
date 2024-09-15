import React from "react"
class CounterComponent2 extends React.Component
{
    shouldComponentUpdate(prevProps,prevState)
    {
        if(this.props.counter!=prevProps.counter)
        {
            return true
        }
        else
        {
            return false
        }
    }
    
    render()
    {
        console.log("Counter 2 rendering")
        return (
            <div>
                <p>The counter 2 is :{this.props.counter}</p>
                <button onClick={this.props.onClickFunc}>Click to increment counter 2</button>   
            </div>
        )
    }
}
export default CounterComponent2