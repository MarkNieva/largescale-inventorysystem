import { BrowserRouter,Route, Routes } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import DeveloperPage from "./developer/DeveloperPage";

const WebController=()=>{


    return(
        <>

        <BrowserRouter>
        <Routes>

            <Route path = "/" element={<LandingPage/>}></Route>
            <Route path="/developer" element={<DeveloperPage/>}></Route>
            
        </Routes>
        </BrowserRouter>

        </>
    )

}


export default WebController;