import { useState } from "react"
function Hoc(WrappedComponent)
{
    return function EnhancedComp()
    {
        let[counter, setCounter]=useState(0)
        function increaseCounter(){
        setCounter(counter+1)
        }
        return(
            <div>
                <WrappedComponent counter={counter} increaseCounter={increaseCounter}/>
            </div>
        )
    }
}
export default Hoc