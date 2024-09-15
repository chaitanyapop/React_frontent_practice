import { useState } from "react"
import Hoc from "./Hoc"

function SecondHoc(props)
{
    return(
        <div>
            <p>{props.counter}</p>
            <button onMouseEnter={props.increaseCounter}>Click to increase counter</button>
        </div>
    )
}
export default Hoc(SecondHoc)