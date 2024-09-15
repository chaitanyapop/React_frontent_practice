import { Link } from "react-router-dom"
function Navbar()
{
    let data=5
    return(
        <div>
            <Link to="/child1" style={{ padding: '10px' }}>
                 Child1
            </Link>
            <Link to="/child1/child2">Child2</Link>
            <Link to={`/child3/${data}`} style={{ padding: '10px' }}>
                Child3
            </Link>
        </div>

    )
}
export default Navbar   