import { useContext,useState,useEffect  } from "react";
import { MyContext } from "./components/MyContext";
import './App.css'
import WebController from './components/WebController'

import StartupAnimation from "./components/loadingscreen/StartupAnimation";

import Footer from './layoutcomponent/footer/Footer.jsx'
import Header from './layoutcomponent/header/Header.jsx'
import Headerforinfo from "./layoutcomponent/header/headerforinfo/Headerforinfo.jsx";
import {useNavigate } from 'react-router-dom'





function App() {
 
  // const { value, setValue } = useContext(MyContext);

  //header toggle
  const { headerToggle,setheaderToggle } = useContext(MyContext);


  //loading

   const [showStartup, setShowStartup] = useState(true);

    // Handle startup completion
  const handleStartupComplete = () => {
    setShowStartup(false);
  };

     //navigator
   const navigator = useNavigate();


  //back to default when reloaded

  useEffect(()=>{
    setheaderToggle("landingheader")
    navigator("/")
  },[])


 

  return (

    <>
    <body>

  {showStartup && <StartupAnimation onComplete={handleStartupComplete} />}


    {/* header */}
   {headerToggle === "landingheader"?
   <Header/> 
   : headerToggle === "headerforinfo" ?
   <Headerforinfo/>
        :
    <></>
   }

    <WebController/>
  
  <Footer/>
    </body>
  
    </>
  )
}

export default App
