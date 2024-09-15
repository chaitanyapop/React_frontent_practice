import { useRef, useState, useEffect } from "react"
function Ref()
{
    //................Approach with normal variables instead of useRef...................................
    // let count=0
    // let [data, setData]=useState(10)
    // useEffect(()=>{
    //     count++
    //     console.log(count)
    // })
    // return(
    //     <div>
    //        <p> This is all about useRef hook {count}</p>
    //        <p>{data}</p>
    //        <button onClick={()=>{setData(19)}}></button>
    //     </div>
    // )
    /*
    ......................Conclusion 1..................
    The above approach is not good when the component re-rendering happens. When the component gets re-rendered the 
    value in 'let' gets reset to its declared value which results in loss of data and the current value
     */

    //.................Approach with useState hook..................................
    // let [count, setCount]=useState(0)
    // let [data, setData]=useState(10)
    
    // useEffect(()=>{
    //     count++
    //     setCount(count) // here it is becoming like an infinite loop situation
    //     /**
    //      two ways to increment previous values in useState
    //      count++
    //      useState(count)
    //       OR
    //     useState((prev)=> prev+1)
    //      */
    // })
    // return(
    //     <div>
    //        <p> This is all about useRef hook {count}</p>
    //        <p>{data}</p>
    //        <button onClick={()=>{
    //         data++
    //         setData(data)}}></button>
    //     </div>
    // )
    /**
     ........................conclusion................................
     the above situation causing a re-render of a component and because of that the situation like infinite loop is getting triggered
     In this scenario we should use useRef hook which increments the value but does not cause the re-render.
     We can create a useRef kind of situation by putting a '[]' in useEffect but still it will cause a re-render.
     */

    //..................Approach with useRef................................
    // let count=useRef(0)
    // let [data, setData]=useState(10)
    // useEffect(()=>{
    //     count.current++
    // })
    // console.log(count)
    // return(
    //     <>
    //         {count.current}
    //         <button onClick={()=>{
    //          data++
    //          setData(data)}}></button>
    //     </>
        
    // )
    //............Same code using useState..........................
    // let [count, setCount]=useState(0)
    // let [data, setData]=useState(10)
    // useEffect(()=>{
    //     //count++oprev
    //     setCount((prev)=>prev+1) // this setCount will also cause a re-render. Two re-renders are happening using useRef we can reduce it to one
    // },[data])
    // console.log(count)
    // return(
    //     <>
    //         {count}
    //         <button onClick={()=>{
    //          data++
    //          setData(data)}}></button>
    //     </>
        
    // )
    /*....................Conclusion................................
    In above example the useRef is not causing any re-render therefore a situation like infinite loop is not getting triggerd, which
    we used to have in an useState.
    Now on clicking the button the state is getting changed which is causing a component re-render. In the re-renders as well the 
    latest updated data of useRef is presisted among the re-renders this problem we had faced by usning normal variables
    
    
    */
   //....................Dom manipulation using useRef.....................................
     let cursor=useRef()
     useEffect(()=>{
        cursor.current.focus()
        cursor.current.style.backgroundColor='yellow'
     })
    return(
        <>
            <input type="text" ref={cursor}></input>
        </>
        
    )
    /*
    In above example the cursor is having a reference of a dom element called input. Now at the start or at anytime if we want to manipulate
    the DOM we can do it using ref.current as it has access to the dom element
     */
}
export default Ref