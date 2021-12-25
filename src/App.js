import HeaderLayout from "./components/HeaderLayout";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PlanJourney from "./pages/PlanJourney";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
        {/* <Login/>
        <SignUp/> */}
        {/* <Dashboard/>   */}
        <PlanJourney/>
    </div>
  );
}

export default App;
