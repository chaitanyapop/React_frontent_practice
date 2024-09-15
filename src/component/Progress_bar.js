import '../App.css'
function Progress({percent=6})
{
    return(
        <div>
            <div id='parent' style={{
                
            }}>
                <div id='child'
                style={{
                    width:`${Math.min(percent,100)}%`, // the expression which needs a JS data keep that CSS inline rest other keep in seperate file
                    // priority goes to inline css first then the external css
                }}>

                </div>
            </div>
        </div>
    )
}
export default Progress