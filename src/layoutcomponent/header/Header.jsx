import { useContext  } from "react";
import { MyContext } from '../../components/MyContext';
import HeaderSt from '../header/HeaderSt.module.css';

import { VscChromeClose } from "react-icons/vsc";
import { FiAlignJustify } from "react-icons/fi";
import { IoLogoAngular } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { BsSignIntersectionFill } from "react-icons/bs";



const Header=()=>{

  const {sidebarToggle,setsidebarToggle} = useContext(MyContext);

    return(
        <>
         <header>
      
      <div className = {HeaderSt.headerCon}>

         {/* logo */}
         <div className = {HeaderSt.logoCon} onClick={()=>{console.log("Hello")}}>
            <IoLogoAngular size={50} />
            <h2>website</h2>
         </div>


            <nav className={HeaderSt.headerLink}>
                <a href = "#">About</a>
                <a  href = "#">Features</a>
                <a  href = "#">Community</a>
            </nav>

             <div className = {HeaderSt.headerbtnCon}>
            <button className = {HeaderSt.menuBtn} 
            onClick={()=>{setsidebarToggle(true)}}
            ><FiAlignJustify size={30}/></button>
            <button>LOGIN</button>
            <button>SIGNUP</button>
          </div>

      

        
          
            
           

         </div>

        </header>

          <div className={`${HeaderSt.sideBarLink} ${ sidebarToggle ? HeaderSt.openSidebar: ""}`}>
            <span onClick={()=>{setsidebarToggle(false)}}><VscChromeClose size={30}/></span>
            
            <nav>
              <button><FaQuestion size={20}/><a>About</a></button>
              <button><MdFeaturedPlayList size={20}/><a>Features</a></button>
              <button><RiUserCommunityFill size={20}/><a>Community</a></button>
              <button><IoLogIn size={20}/><a>Login</a></button> 
              <button><BsSignIntersectionFill size={20}/><a>Signup</a></button>
              </nav>

            </div>

        

        </>
    )
}

export default Header;