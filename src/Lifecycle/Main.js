import { useState } from "react"
import CounterComponent from "./CounterComponent"
import CounterComponent2 from "./CounterComponent2"
function Main()
{
    let[counter1,setCounter1]=useState(0)
    let[counter2,setCounter2]=useState(0)
    function increment_counter_1()
    {
        setCounter1(counter1+1)
        console.log("In counter 1 inc")
    }
    function increment_counter_2()
    {
        setCounter2(counter2+1)
        console.log("In counter 2 inc")
    }
    return(
        <div>
            <div>
                <p>Counter 1</p>
                <CounterComponent counter={counter1} onClickFunc={increment_counter_1} name="Harry"/>
            </div>
            <div>
                <p>Counter 2</p>
                <CounterComponent2 counter={counter2} onClickFunc={increment_counter_2}/>
            </div>
        </div>
    )
}
export default Main