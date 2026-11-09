// import {useNavigate} from 'react-router-dom'
// import { MyContext } from "../../components/MyContext";
// import { useContext  } from "react";

import { FaDiscord,FaFacebook    } from "react-icons/fa";
import { FaSquareXTwitter,FaLinkedin   } from "react-icons/fa6";

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

    return(
        <>

       <div className={DeveloperPageSt.container}>

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

            <h2>Hello</h2>
            <a>sfddsf</a>
        </div>

       </div>
        </>
    )
}


export default DeveloperPage;