import { BrowserRouter,Route, Routes } from "react-router-dom";
import LandingPage from "./landing/LandingPage";

const WebController=()=>{


    return(
        <>

        <BrowserRouter>
        <Routes>

            <Route path = "/" element={<LandingPage/>}></Route>
            
        </Routes>
        </BrowserRouter>

        </>
    )

}


export default WebController;