import { useContext,useState,Suspense  } from "react";
import { MyContext } from "./components/MyContext";
import './App.css'
import WebController from './components/WebController'

import StartupAnimation from "./components/loadingscreen/StartupAnimation";

import { VscChromeClose } from "react-icons/vsc";
import { FiAlignJustify } from "react-icons/fi";
import { IoLogoAngular } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { BsSignIntersectionFill } from "react-icons/bs";

function App() {
 
  // const { value, setValue } = useContext(MyContext);

  //header toggle
  const { headerToggle } = useContext(MyContext);
  const {sidebarToggle,setsidebarToggle} = useContext(MyContext);


  //loading

   const [showStartup, setShowStartup] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

    // Handle startup completion
  const handleStartupComplete = () => {
    setShowStartup(false);
    setIsAppReady(true);
  };

  
//   const LoadingFallback = () => (
//   <div style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f5f5f5'
//   }}>
//     <div style={{
//       width: '50px',
//       height: '50px',
//       border: '5px solid #f3f3f3',
//       borderTop: '5px solid #3498db',
//       borderRadius: '50%',
//       animation: 'spin 1s linear infinite'
//     }} />
//     <style>{`
//       @keyframes spin {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//     `}</style>
//     <h1>Fetching up</h1>
//   </div>
// );

  return (

    
    <body>

  {showStartup && <StartupAnimation onComplete={handleStartupComplete} />}


    {/* header */}
   {headerToggle ?
     <header>

      <div class = "headerCon">

         {/* logo */}
         <div class = "logoCon">
            <IoLogoAngular size={50} />
            <h1>website</h1>
         </div>


            <nav class='headerLink'>
                <a href = "#">About</a>
                <a  href = "#">Features</a>
                <a  href = "#">Community</a>
            </nav>

             <div class = "headerbtnCon">
            <button class = "menuBtn" 
            onClick={()=>{setsidebarToggle(true)}}
            ><FiAlignJustify size={30}/></button>
            <button>LOGIN</button>
            <button>SIGNUP</button>
          </div>

       
        
          <div class={`sideBarLink ${sidebarToggle ? "openSidebar": ""}`}>
            <span onClick={()=>{setsidebarToggle(false)}}><VscChromeClose size={30}/></span>
            
            <nav>
              <button><FaQuestion size={20}/><a>About</a></button>
              <button><MdFeaturedPlayList size={20}/><a>Features</a></button>
              <button><RiUserCommunityFill size={20}/><a>Community</a></button>
              <button><IoLogIn size={20}/><a>Login</a></button> 
              <button><BsSignIntersectionFill size={20}/><a>Signup</a></button>
              </nav>
            </div>
          
            
           

         </div>

        </header>
        :
        <></>
 }




    <WebController/>
 
    </body>
  )
}

export default App
