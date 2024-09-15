import { useRef, useState, useEffect} from "react"
//.............UNCONTROLLED COMPONENT............................................
function Controlled_unctr_component()
{
    let reference=useRef()
    console.log("re-rendering")
    function change_ref()
    {
        reference.current.value="this is not a value"
        console.log(reference)
    }
    return(
    <div>
        <input value={reference?.current?.value} ref={reference}/>
        <button onClick={change_ref}></button>
        {/* <p>{reference?.current?.value}</p> */}
        <p>{reference?.current?.value}</p>
           
    </div>
    ) // here DOM manipulation is happening directly inside the DOM and state is managed directly in a DOM. It is not 
    // managed by React state therefore component re-rendering will not take place and we are using useRef as well.
    //.......................CONTROLLED COMPONENT..............................................................
    // console.log("re-rendering")
    // let [reference,setRef]=useState("This is value")
    // function change_ref()
    // {
    //     setRef("This is not a value")
    // }
    // return(
    //     <div>
    //         <input value={reference}/>
    //         <button onClick={change_ref}></button> 
    //         <p>{reference}</p>
    //     </div>
    // )


    //..........................Example 2 Controlled by react state.........................................
//   const [inputValue, setInputValue] = useState('');
//    console.log("re-rendering")
//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   const handleClick = () => {
//     alert(`Input Value: ${inputValue}`); // here it is accessing the value from internal React state
//   };
//   return (
//     <>
//         <input type="text" value={inputValue} onChange={handleChange} />
//         <button onClick={handleClick}></button>
//     </>
    
    
//   );

//...............................Uncontrolled comp........................................................
// const inputRef = useRef();

//   const handleClick = () => {
//     console.log(inputRef)
//     alert(`Input Value: ${inputRef.current.value}`);// here useRef has the reference to the DOM element and the value is directly being
//     // accessed from the DOM element
//   };

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Show Value</button>
//     </>
//   );
}
export default Controlled_unctr_component
