import { Link, useSearchParams } from 'react-router-dom' 
import { useEffect, useState } from 'react'
 import Progress_bar from './Progress_bar'
function UseEffect_prac()
{
    let[flag1, setFlag1]=useState(false)
    let[flag2, setFlag2]=useState(false)
    // useEffect(()=>{
    //     function check()
    //     {
    //         console.log("this function executes when the component mounts")
    //     }
    //     check()
    //     return(()=>{console.log("THIS WILL EXECUTE WHEN COMPONENT UNMOUNTS")})
    // },[])
    // return(
    //     <div>
    //         <p>This is practice of useEffect</p>
    //         <Link to='/progress'><p>hello</p></Link>
            
    //     </div>
    // )
    console.log("re-rendering")
    useEffect(()=>{
        console.log("running useEffect")
    },[flag1])
    return(
        <>
            <p onClick={()=>{setFlag1(!flag1)}}>{flag1 ? "Flag1 1 true":"Flag 1 false"}</p>
            <p onClick={()=>{setFlag2(!flag2)}}>{flag2 ? "Flag1 2 true":"Flag 2 false"}</p>
        </>
    )
    
}

export default UseEffect_prac