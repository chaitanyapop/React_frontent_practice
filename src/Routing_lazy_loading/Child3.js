import { useParams } from "react-router-dom"
function Child3()
{
    console.log("child3")
    let {id}=useParams()
    return(
        <div>
            <p>Inside child 3 and the id is {id} </p>
        </div>
    )
}
export default Child3