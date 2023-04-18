import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "../Screen/Home"
import Dashboard from "../Dashboard/Dashboard"
import Menu from "../components/Menu"
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="auth" >
            <Route path="dashboard" element={<Dashboard/>} />
        </Route>
        {/* Front Routing */}
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing