import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "../components/Home"
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="dashboard" >
            
        </Route>
        {/* Front Routing */}
        <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing