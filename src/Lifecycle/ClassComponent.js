import React from "react";

class ClassComponent extends React.Component
{
    constructor()
    {
        console.log("Inside constructor...")
        super()
        this.state={
            Mname:"Harry",
            list_of_prods:[]
        }
    }
    static getDerivedStateFromProps(newProps,oldState)
    {
        console.log("Inside getDerivedStateFromProps....")
        console.log("new props are",newProps)
        console.log("old state is",oldState)
        if(newProps.name!=oldState.Mname)
        {
            return(
                {
                    Mname:newProps.name
                })
        }
        else
        {
            return null;
        }
    
        
    }
    componentDidMount()
    {
        // this method gets invoked as soon as the component is mounted then we need to call some essentials methods
        console.log("Inside the Component did mount ....")
        let prods=fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))


        this.setState({
            list_of_prods:prods
        })
    }
    render()
    {
        console.log("Inside render method")
        return(
            <div>
                <div>
                    <p>My name is {this.state.Mname}</p>
                </div>
            </div>
        )
    }
}
export default ClassComponent