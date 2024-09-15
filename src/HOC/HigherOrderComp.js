function HigherOrderComp(FirstComponent)
{
    let hoc_data=`This is the main concept of HOC`
    console.log(FirstComponent)
    return (
        function Component()
        {
            return (
                <>
                <FirstComponent data={hoc_data}/>
                </>
            )
        }
        
      )  
    
}
export default HigherOrderComp