import { useContext } from "react";
import { MyContext } from "./components/MyContext";
import './App.css'
import WebController from './components/WebController'

import { VscChromeClose } from "react-icons/vsc";
import { FiAlignJustify } from "react-icons/fi";
import { IoLogoAngular } from "react-icons/io";

function App() {
 
  // const { value, setValue } = useContext(MyContext);

  //header toggle
  const { headerToggle } = useContext(MyContext);
  const {sidebarToggle,setsidebarToggle} = useContext(MyContext);


  return (
    
    <>

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

       
        
          <nav class={`sideBarLink ${sidebarToggle ? "openSidebar": ""}`}>
            <span onClick={()=>{setsidebarToggle(false)}}><VscChromeClose size={30}/></span>
                <a href = "#">About</a>
                <a  href = "#">Features</a>
                <a  href = "#">Community</a>
                <a  href = "#">Login</a>
                <a  href = "#">Signup</a>
            </nav>
          
            
           

         </div>

        </header>
        :
        <></>
 }


    <WebController/>
 
    </>
  )
}

export default App
