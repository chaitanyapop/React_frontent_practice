import { useState } from "react"
import Hoc from "./Hoc"

function FirstHoc(props)
{
    return(
        <div>
            <p>Hello</p>
            <p>{props.counter}</p>
            <button onClick={props.increaseCounter}>Click to increase counter</button>
        </div>
    )
}
export default Hoc(FirstHoc)