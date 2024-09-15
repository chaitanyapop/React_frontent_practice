import Wrapper_parent from "./Wrapper_parent"
import Child1 from "./Child1"
import Child2 from "./Chid2"
function Parent_comp()
{
    return(
        <Wrapper_parent name1="chaitanya" name2="hello">
            <Child1/>
            <Child2/>
        </Wrapper_parent>
    )
}
export default Parent_comp