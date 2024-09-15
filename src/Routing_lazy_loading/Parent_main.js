import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
// import Navbar from "./Navbar"
// import Child1 from "./Child1"
// import Child2 from "./Child2"
// import Child3 from "./Child3"/*these imports blocks the execution of the code */

let Navbar=React.lazy(()=>import('./Navbar'))
let Child1=React.lazy(()=>import('./Child1'))
let Child2=React.lazy(()=>import('./Child2'))
let Child3=React.lazy(()=>import('./Child3'))
console.log(Child1)
function Parent_main()
{
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Navbar/>
            </div>
            </Suspense>
            {/* .................Normal Routing*/}
           {/* <Routes>
                <Route exact path="/child1" element={<Child1/>}></Route>
                <Route exact path="/child2" element={<Child2/>}></Route>
                <Route exact path="/child3" element={<Child3/>}></Route>
           </Routes> */}
           {/*................ Nested Routing*/}
           {/* <Routes>
            <Route exact path="/child1" element={<Child1 />}>
                <Route exact path="child2" element={<Child2 />} />
            </Route>
            <Route path="/child3" element={<Child3 />} />
      </Routes> */}
      {/*Dynamic routing */}
        <Suspense fallback={<div>Loading routes....</div>}>
            <Routes>
                <Route exact path="/child1" element={<Child1/>}></Route>
                <Route exact path="/child2" element={<Child2/>}></Route>
                <Route exact path="/child3/:id" element={<Child3/>}></Route>
           </Routes>
        </Suspense>
            <div>We are in lazy loading and routing concept</div>
        
        </div>
    )
}
export default Parent_main