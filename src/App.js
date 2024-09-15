import logo from './logo.svg';
import './App.css';
import Stopwatch from "../src/component/stopwatch/Stopwatch"
import Hide_ele from './component/Hide_ele';
import Select_country_cities from './component/Select_country_city';
import Check_and_delete from './component/Check_and_delete';
import Meta_ques from './component/Meta_ques';
import Login_form from './component/Login_form';
import Debounce from './component/Debounce';
import Throttling from './component/Throttling';
import Event_bubbling_capturing from './component/Event_bubbling_capturing'
import Class_component from './component/Class_component';
import Progress from './component/Progress_bar';
import Ref from './component/useRef';
import FirstComponent from './HOC/FirstComponent'
import HigherOrderComp from './HOC/HigherOrderComp';
import ClassComponent from './Lifecycle/ClassComponent';
import Main from './Lifecycle/Main';
import UseEffect_prac from './component/useEffect_prac';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
//import Parent from './Interview_ques/Parent';
import Memo_hook from './component/Memo_hook';
//import Parent_call from './component/callback_hook/Parent_call';
import Controlled_unctr_component from './component/Controlled_uncontrolled';
import Class_comp_way from './Pure_Component/Class_comp_way';
import Func_comp_way from './Pure_Component/Func_comp_way';
import Parent from './component/Error_boundaries/Parent';
import Parent_comp from './Composition/Parent_comp'
import Parent_main from './Routing_lazy_loading/Parent_main';
import FirstHoc from './HOC/FirstHoc';
import SecondHoc from './HOC/SecondHoc';
import Parent_call from './component/callback_hook/Parent_call';

function App() {
  // let HOC= HigherOrderComp(FirstComponent)
  // console.log(HOC)
  // return (
  //   <div className="App">
  //    {/* <ClassComponent name="chaitanya"/> */}
  //    <Main/>
  //   </div>
  // );
  return(
    // <Router>
    // <>
    //   <Parent_main/>
    //   <Outlet/>
    // </>
    // </Router>
    <>
      {/* <Class_comp_way/> */}
      <Parent_main/>
    </>
  )
  // return(
  //   <div>
      
  //     <Router>
      
  //       <Routes>
  //         <Route exact path='/' element={<UseEffect_prac/>}/>
  //         <Route path="/progress" element={<Progress/>}/>
  //       </Routes>
  //     </Router>
      
  //   </div>
  // )
}

export default App;
