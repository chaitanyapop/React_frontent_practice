function Event_bubbling_capturing()
{
    return(
          
            <div id="grandparent" onClickCapture={()=>{console.log("Grand parent")}}>
                <div id="parent" onClick={(e)=>{ e.stopPropagation()
                    console.log("parent")}}>
                    <div id="child" onClickCapture={()=>{console.log("Child")}}>

                    </div>
                </div>
            </div>
    )
}
export default Event_bubbling_capturing