import { useContext } from "react";
import { MyContext } from "./components/MyContext";
import './App.css'
import WebController from './components/WebController'

import { VscChromeClose } from "react-icons/vsc";
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

            <h1>LOGO NAME</h1>

            <ol class='headerLink'>
                <l1><a href = "#">About</a></l1>
                <l1><a  href = "#">Features</a></l1>
                <l1><a  href = "#">Community</a></l1>
            </ol>

             <div class = "headerbtnCon">
            <button>LOGIN</button>
            <button>SIGNUP</button>
          </div>

            {sidebarToggle ?
               <ul class='sideBarLink'>
                <li><span onClick={()=>{setsidebarToggle(false)}}><VscChromeClose size={30}/></span></li>
                <l1><a href = "#">About</a></l1>
                <l1><a  href = "#">Features</a></l1>
                <l1><a  href = "#">Community</a></l1>
                <l1><a  href = "#">Login</a></l1>
                <l1><a  href = "#">Signup</a></l1>
            </ul>

            :

            ""
           }
           

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
