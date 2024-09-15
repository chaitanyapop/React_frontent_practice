function Debounce()
{
    let counter=0
    function print_num(name, age)
    {
        counter++
        console.log("The number is "+ counter+ " "+ name+" " +" "+ age)
    }
    function Debounce(fn, delay)
    {
        let timer;
        return (
            function()
            {
                let args=arguments
                let val=[10,20,30]
                console.log(val)
                clearTimeout(timer)
                timer=setTimeout(()=>{fn.apply(undefined,args)},delay)
            }
        )
    }
    let betterFunction=Debounce(print_num, 2000)
    return (
        <div>
            <p>Text box for search</p>
            <input type="search" onChange={()=>{betterFunction("abc","20")}}></input>
        </div>
        
    )
}
export default Debounce