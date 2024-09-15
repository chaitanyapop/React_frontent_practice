import HigherOrderComp from "./HigherOrderComp"

function FirstComponent(props)
{
    return (
        <>
            <p>Here I am getting the data from my higher order component so that the reusable code will stay inside
                HOC component and by passing this component to HOC then this component will also get enhanced
                the enhanced component with data is "{props.data}"
            </p>
        </>
    )
}
// let HOC= HigherOrderComp(FirstComponent)
// // console.log(HOC)
export default FirstComponent