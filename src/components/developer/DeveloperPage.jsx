// import {useNavigate} from 'react-router-dom'
// import { MyContext } from "../../components/MyContext";
// import { useContext  } from "react";

import { FaDiscord,FaFacebook,FaReact,FaHtml5,FaCss3Alt,FaGithub   } from "react-icons/fa";
import { FaSquareXTwitter,FaLinkedin,FaFlutter   } from "react-icons/fa6";
import { RiJavaLine,RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative ,TbBrandMysql } from "react-icons/tb";
import { SiDjango,SiMongodb } from "react-icons/si";
import { IoLogoJavascript,IoLogoFirebase  } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";

import DeveloperPageSt from '../developer/DeveloperPageSt.module.css';
const DeveloperPage=()=>{

//     const navigator = useNavigate();
//  const { setheaderToggle } = useContext(MyContext);


    const socialIcondes=[
         {icon:<a href = "https://discord.com"><FaDiscord color="black" size={40} /></a>, name:"Discord"},
         {icon:<a href = "https://www.facebook.com"><FaFacebook color="black" size={40}/></a>, name: "Facebook"},
         {icon:<a href = "#"><FaSquareXTwitter color="black" size={40}/></a>,  name:"Twitter"},
         {icon:<a href = "https://www.linkedin.com/in/mark-clarence-nieva-5b4683390/"><FaLinkedin color="black" size={40}/></a>,  name:"LinkedIn"}
     ]

     const skills=[

        {skill:  <div className={DeveloperPageSt.skillBox}><FaReact size={25}/><a>React</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><RiJavaLine size={25}/><a>Java</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><TbBrandReactNative size={25}/><a>React Native</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><SiDjango size={25}/><a>Django</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><RiNextjsFill size={25}/><a>Next.js</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><FaHtml5 size={25}/><a>HTML</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><FaCss3Alt size={25}/><a>CSS</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><IoLogoJavascript size={25}/><a>JavaScript</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><FaFlutter size={25}/><a>Flutter</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><IoLogoFirebase size={25}/><a>Firebase</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><SiMongodb size={25}/><a>MongoDB</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><TbBrandMysql size={25}/><a>MySQL</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><FaGithub size={25}/><a>Github</a></div>},
        {skill:  <div className={DeveloperPageSt.skillBox}><BsTypescript size={25}/><a>TypeScript</a></div>},

     ]

    return(
        <>

       <div className={DeveloperPageSt.container}>

<div  className={DeveloperPageSt.firstIntroCon }>
        <div className={DeveloperPageSt.profileinfoCon}>

               <div className={DeveloperPageSt.opentoWorkCon}>
        Open to new Opportunities coming this year
      </div>

        <h1>Mark Clarence Nieva</h1>
        <span>
        <h2>Frontend Developer / Aspiring Backend Developer / Technical Support </h2>
        <a>I build Reliable frontend web apps for fun. Aspiring to implement proper backend solutions. I also Assist users through hardware/sotfware troubleshooting, Escalating Tickets and IT Asset Inventory Management </a>
       </span>


   



      <div className={DeveloperPageSt.socialiconCon}>
        

     {socialIcondes.map((item)=>(   

        <span>
    <div className={DeveloperPageSt.socialicon}>{item.icon} </div> 
    <a>{item.name}</a>
    </span> 

     ))}
    </div>

      

        </div>

        <div className={DeveloperPageSt.bioinfoCon}>

        <div className={DeveloperPageSt.bioinfo}>
            <h2>Hello!</h2>
            <a>I am dedicated to becoming proficient in fullstack development. Through the background of frontend and aspiring to become backend, i am ready to engage myself to the IT industry contributing my known skills; at the same time, learn something new to reach new heights </a>
        </div>

        <div className={DeveloperPageSt.skillsCon}>

            <h2>Skills</h2>

            <div className={DeveloperPageSt.skillsBoxCon}>
           {skills.map((item)=>(
            <>
            {item.skill}
            </>
           ))}
          </div>
        </div>


        </div>
        </div>

       </div>
        </>
    )
}


export default DeveloperPage;