import { Outlet } from "react-router-dom"

function Child1()
{
    console.log("child1")
    return(
        <div>
            <p>Inside child 1</p>
            {/* <Outlet/> */}
        </div>
    )
}
export default Child1