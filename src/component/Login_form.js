import { useState } from "react"

function Login_form()
{
    let [email, setEmail]=useState("")
    let [password, setPassword]=useState("")
    let[disable, setDisable]=useState(true)
    let[flag, setFlag]=useState(false)
    function checkUser(e)
    {
        e.preventDefault()
        if(password=="password123")
        {
            alert("You are successfully loged in")
        }
        else
        {
            setFlag(true)
        }
    }
    return(
        <div>
            <h2>Login form</h2>
            <form>
                <label>Email</label>
                <input type="text" placeholder="Enter email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}></input>
                <label>Password</label>
                <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>{
                    if(password.length>6)
                    {
                        setDisable(false)
                    }
                    else{
                        setDisable(true)
                    }
                    setPassword(e.target.value)
                }}></input>
                <button disabled={disable} onClick={(e)=>{checkUser(e)}}>Login</button>
                
            </form>
            {flag && <p>Incorrect username or password</p>}
        </div>
    )
}
export default Login_form