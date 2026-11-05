import { useContext,useState  } from "react";
import { MyContext } from "./components/MyContext";
import './App.css'
import WebController from './components/WebController'

import StartupAnimation from "./components/loadingscreen/StartupAnimation";

import Footer from './layoutcomponent/footer/Footer.jsx'
import Header from './layoutcomponent/header/Header.jsx'


function App() {
 
  // const { value, setValue } = useContext(MyContext);

  //header toggle
  const { headerToggle } = useContext(MyContext);


  //loading

   const [showStartup, setShowStartup] = useState(true);

    // Handle startup completion
  const handleStartupComplete = () => {
    setShowStartup(false);
  };


  return (

    <>
    <body>

  {showStartup && <StartupAnimation onComplete={handleStartupComplete} />}


    {/* header */}
   {headerToggle ?
   <Header/>
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
