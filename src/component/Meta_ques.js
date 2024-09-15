import { useState } from "react"

function Meta_ques()
{
    let arr_of_obj1=[
        {id:1, text:"Item 1", checked:false},
        {id:2, text:"Item 2", checked:false},
        {id:3, text:"Item 3", checked:false},
        {id:4, text:"Item 4", checked:false},
        {id:5, text:"Item 5", checked:false}
    ]
    let[obj1, setObj1]=useState(arr_of_obj1)
    let[obj2, setObj2]=useState([])
   
    function onCheck(id,obj)
    {
        let updatedState=obj.map((data)=>{
            if(data.id==id)
            {
                data.checked=!data.checked
            }
           return data
        })
        if(obj==obj1)
        {
            setObj1(updatedState)
        }
        else
        {
            setObj2(updatedState)
        }
    }
    function shiftDown()
    {
        let updatedState=obj1.filter((data)=>{
            return(data.checked==true)
        })
        
        let updateObj1=obj1.filter((data)=>{
            return(data.checked==false)
        })
        updatedState.map((data)=>data.checked=false)
        let newList=obj2.concat(updatedState)
        setObj2(newList)
        setObj1(updateObj1)
       
        
    }
    function shiftUp()
    {
        let updatedState=obj2.filter((data)=>{
            return(data.checked==true)
        })
        let updatedobj2=obj2.filter((data)=>{return(data.checked==false)})
        let newList=updatedState.map((data)=>{
            data.checked=false
            return data
        })
        let updatedObj=newList.concat(obj1)
        setObj1(updatedObj)
        setObj2(updatedobj2)
        
    }
    return (
        <div>
            <ul>
                {obj1.map((data)=>(
                    <li>
                        <input type="checkbox" checked={data.checked} onChange={()=>{onCheck(data.id,obj1)}}/>
                        
                        {data.text}
                    </li>
                ))}
            </ul>
            <button onClick={()=>{shiftDown()}}>Shift down</button>
            <button onClick={()=>{shiftUp()}}>Shift up</button>
            <ul>
                {obj2.map((data)=>(
                    <li>
                        <input type="checkbox" checked={data.checked} onChange={()=>{onCheck(data.id,obj2)}}/>
                        
                        {data.text} 
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Meta_ques