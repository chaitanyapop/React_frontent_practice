import Child from "./Child"
import { useEffect, useState} from "react"
function Parent()
{
    let [data,setData]=useState(null)
    useEffect(()=>{
        async function api_call()
        {
            let api_data= await fetch("https://fakestoreapi.com/products")
            let final_api_data=await api_data.json()
            setData(final_api_data)
        }
        api_call()
    },[])
    return(
        <div>
            <Child data={data}/>
        </div>
    )
}
export default Parent