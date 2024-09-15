import { useMemo, useState } from "react"

/*This is for an example and we can do it in better way as well. It is just for understanding a concept */
function Memo_hook()
{
    let [count, setCount]=useState(0)
    let[show, setShow]=useState(false)
    function inc_count()
    {
        setCount(count+1)
    }
    function getValue(num)
    {
        console.log("Inside getVal function")
        for(let i=0;i<100;i++){}
        return num
    }
    
    let counter_val=useMemo(()=>{return getValue(count)},[count])
    // let counter_val=getValue(count) This function used to call in every renders to avoid this we use useMemo so that function call
    // will only take place when the dependecy changes



    return(
        <div>
            <button onClick={inc_count}>Counter</button>
            <p>the counter is {counter_val}</p>
            <button onClick={()=>{setShow(!show)}}>
                {show ? "Click me plz!!" : "Thanks for clicking!!!"}
            </button>
        </div>
    )
}
export default Memo_hook