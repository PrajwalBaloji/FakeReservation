import { useReducer } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import PublicRoute from "./Auth/PublicRoute";
// import HeaderLayout from "./components/HeaderLayout";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PlanJourney from "./pages/PlanJourney";
import SignUp from "./pages/SignUp";

// usereducer hook to mentain the aplication state 
const initialState = {
  userName:''
}

export const ACTION={
  LOGIN:'LOGIN'
}

const reducer =(state,action)=>{
  switch (action.type) {
    case ACTION.LOGIN:
      return  {
        ...state,userName:action.payload
      }
    
  
    default:
      return state;
  }
   
}

// App start 
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute ><Dashboard state={state}/></PrivateRoute>} exact/>
      <Route path="/planjourney" element={<PrivateRoute ><PlanJourney /></PrivateRoute>} exact/>
      <Route path="/login" element={<PublicRoute ><Login dispatch={dispatch} /></PublicRoute>} exact />
      <Route path="/signup" element={<PublicRoute ><SignUp /></PublicRoute>}  exact/>
    </Routes>
  );
}

export default App;
