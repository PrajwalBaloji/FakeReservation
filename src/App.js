import { useReducer } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { getData } from "./API/api";
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
  userName:'',
  reservationList:[],
  destinations:[]
}

export const ACTION={
  LOGIN:'LOGIN',
  CREATE_JOURNEY:'CREATE_JOURNEY',
  CANCEL_JOURNEY:'CANCEL_JOURNEY',
  SET_RESERVATIONS:'SET_RESERVATIONS',
  SET_DESTINATION:'SET_DESTINATION',

}

const reducer =(state,action)=>{
  switch (action.type) {
    case ACTION.LOGIN:
      return  {
        ...state,userName:action.payload
      }
    case ACTION.CREATE_JOURNEY :
      return {
        ...state,
        reservationList:[...state.reservationList,action.payload]
      }
    case ACTION.CANCEL_JOURNEY : 
      return {
        ...state,
        reservationList:state.reservationList.filter((item)=>{
          return item.id !== action.payload
        })
      }
      
    case ACTION.SET_RESERVATIONS : 
     return {
       ...state,
       reservationList:action.payload
     }

    case ACTION.SET_DESTINATION:
      return {
        ...state,
        destinations:action.payload
      }
    
  
    default:
      return state;
  }
   
}

// App start 
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  console.log('state',state);
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute ><Dashboard state={state} dispatch={dispatch}/></PrivateRoute>} exact/>
      <Route path="/planjourney" element={<PrivateRoute ><PlanJourney dispatch={dispatch} state={state}/></PrivateRoute>} exact/>
      <Route path="/login" element={<PublicRoute ><Login dispatch={dispatch} /></PublicRoute>} exact />
      <Route path="/signup" element={<PublicRoute ><SignUp dispatch={dispatch}/></PublicRoute>}  exact/>
    </Routes>
  );
}

export default App;
