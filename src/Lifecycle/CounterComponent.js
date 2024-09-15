import React from "react"
class CounterComponent extends React.Component
{
    constructor()
    {
        super()
        console.log("Inside constructor")
        this.state={
            my_name:"chaitanya",
            list_of_prods:[]
        }
    }
    static getDerivedStateFromProps(newProps,oldState)
    {
        return({my_name:newProps.name}) // on the basis of props it updates the state
        
    }
    shouldComponentUpdate(NextProps,Nextstate)
    {
        if(this.props.counter!=NextProps.counter)
        {
            return true
        }
        else
        {
            return false
        }
        /*Without thism in output if we are incrementing counter 2 then also the counter 1 was getting re-rendered. To put the constraint on
        it we have checked here is that current prop value and previous props value are not same then only render else no render */
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Inside get sanpshot before update")
        return prevState
    }
    componentDidMount()
    {
        console.log("Inside the Component did mount ....")
        let prods=fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
        this.setState({
            list_of_prods:prods
        })
    }
    componentDidUpdate(snapshot)
    {
        console.log("Inside the Component did update ....")
        console.log("the snapshot is",snapshot)
        let prods=fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
        this.setState({
            list_of_prods:prods
        })
    }
    componentWillUnmount()
    {
        console.log("This will not print as the component is unmounted and here we do to remove or reset some var or timers")
    }
    render()
    {
        console.log("counter 1 rendering")
        return(
            <div>
                <p>My name is {this.state.my_name}</p>
                <p>The counter 1 is :{this.props.counter}</p> {/**class based comp has direct access to the props */}
                <button onClick={this.props.onClickFunc}>Click to increment counter 1</button>
            </div>
        )
    }
}
export default CounterComponent