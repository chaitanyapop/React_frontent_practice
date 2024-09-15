import { useState, useCallback } from "react";
import Child_call from "./Child_call"

function Parent_call()
{
    // let [count, setCount]=useState(0)
    // function count_inc()
    // {
    //     setCount(count+1)
    // }
    // function random_func()
    // {

    // }

    // return(
    // <div>
    //     <Child_call/>
    //     <p>This is the parent component</p>
    //     <button onClick={count_inc}>Counter</button>
    //     <p>{count}</p>
    // </div>
    // )
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount(count + 1);
    };
    const addTodo = useCallback(() => {
      console.log("executing")
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]); // this addTodo Holds a function which we can call later in child comp
    /* Working of this example- "addTodo" is passed to the child component. Child component triggers addTodo which causes a state change
    as well as updates the todos array with new element. Even if state change is not there and we are somehow updating todos then in
    that case react will understand "ok todos dependency is changed and it will create new refrence to the function" */
  
    return (
      <>
        <Child_call todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };

export default Parent_call