import React, { useState } from 'react';

function Check_and_delete()
{
  const arr_of_cities=['Mumbai','Bengaluru','Kolkata','Jaipur']
const arr_of_cities_obj=[]

for(let i=0;i<arr_of_cities.length;i++)
{
  var object={}
  object.id=i;
  object.text=arr_of_cities[i]
  object.checked=false
  arr_of_cities_obj.push(object)
  
}

var [arr_of_cities_main, setCities]=useState(arr_of_cities_obj)

function handle_change(id)
{
 
  var updatedItems=arr_of_cities_main.map((items)=>{
  
    if(items.id===id)
    {
      items.checked= !items.checked
    }
    console.log(items)
    return items
    
  } 
  )
  console.log(updatedItems)
  setCities(updatedItems)
}
function handeDelete(id)
{
  let updatedItems=arr_of_cities_main.filter((item)=>{
    return (item.id != id)
  })
  setCities(updatedItems)
}
  return (
    <div>
      <h1>To do list</h1>
      {arr_of_cities_main.map((item,i)=>
      {
        return (
          <li>
            <input type="checkbox" checked={item.checked} onChange={()=>{handle_change(item.id)}}></input>
            {item.text}
            {item.checked && <button onClick={()=>{handeDelete(item.id)}}>Delete</button>}
          </li>
        )
      }
      )}
    </div>
  )  
}
export default Check_and_delete;








// const arr_of_cities=['Mumbai','Bengaluru','Kolkata','Jaipur']
//   let flags=new Array(arr_of_cities.length).fill(true)
//   const [cities, setCities]=useState(arr_of_cities)
//   //const [flag, setFlag]=useState(false)
//   const [currentIndex, setIndex]=useState()
//   function handleChange(i,e)
//   {
//     // setFlag(!flag)
//     setIndex(i)
//     flags.map((item,val)=>{
      
//       if(val===i)
//       {
//         console.log("hello")
//         flags[i]= !flags[i]
//         console.log(flags)
//       }
//     })
//   }
//   return(
//       <div>
//         <h1>To do list</h1>
//         {cities.map((item,i)=>{
//           return(
            
//             <li>
//               <input type="checkbox" checked={flags[i]} onChange={(e)=>{handleChange(i,e)}}></input>
//               {item}
//               {(flags[i] && i==currentIndex) && <button>Delete</button>}
//             </li>
//           )
//         })}
//       </div>
    
//   )
