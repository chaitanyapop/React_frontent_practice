function Child1(props)
{
    console.log("Inside child 1", props)
    return(
        <div>
            <p>The name from wrapper parent is {props.name1}</p>
        </div>
    )
}
export default Child1