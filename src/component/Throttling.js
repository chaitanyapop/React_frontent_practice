function Throttling()
{
    let counter=0
    function main_event()
    {
        console.log("Hello", counter++)
    }
    function throttle(fn, delay)
    {
        let flag= true
        return function()
        {
            if(flag==true)
            {
                main_event()
                flag=false
                setTimeout(()=>{flag=true},delay)
            }
        }
    }
    let betterFunction= throttle(main_event, 2000)
    return(
        <div>
            <input type="text" onChange={()=>{betterFunction()}}></input>
        </div>
    )
}
export default Throttling