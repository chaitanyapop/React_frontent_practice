import Wrapper_class from "./Wrapper_class"
import Wrap_func from "./Child_err";
import Wrapper_func from "./Wrapper_func";
function Parent()
{
    return(
        <div>
            <p>This concept is all about error boundaries</p>
            <Wrapper_class>
                <ComponentWithError/> 
            </Wrapper_class>
            {/* <Wrap_func>
                <ComponentWithError/> 
            </Wrap_func> */}
        </div>
    )
}
const ComponentWithError = () => {
    // return(
    //     <div>
    //         <p>you are in error boundary</p>
    //     </div>
    // )
    
    throw new Error('This is a simulated error in a component.');
  };
export default Parent