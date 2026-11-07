import FooterSt from '../footer/FooterSt.module.css';

import warehousewaves from "../../assets/warehouse_waves.jpg";

import { IoLogoAngular } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { FaRegAddressCard,FaDiscord,FaFacebook,FaReddit    } from "react-icons/fa";
import { FaCalendarDay,FaSquareXTwitter  } from "react-icons/fa6";

const Footer = ()=>{


    //functions-------


    //social Icon


    const socialIcondes=[
        {icon:<FaDiscord color="green" size={40}/>},
        {icon:<FaFacebook color="green" size={40}/>},
        {icon:<FaSquareXTwitter color="green" size={40}/>},
        {icon:<FaReddit color="green" size={40}/>}
    ]

    const quickLinksdes=[
        {link:<a href = "#" >Developer &ensp; {">"}</a>},
        {link: <a href = "#" >Privacy Policy &ensp; {">"} </a>},
        {link:  <a href = "#" >Terms of Service &ensp; {">"} </a>}
    ]

    const inventorydes=[
        {link: <a href = "#">Product Tracking &ensp; {">"}</a>},
        {link: <a href = "#">Supplier Partner &ensp; {">"}</a>},
        {link: <a href = "#">Reports &ensp; {">"}</a>}
    ]

    return(

        <>

        <footer>

            <div className={FooterSt.container}>

              <div className={FooterSt.generalCon}>
                {/* information */}

                <div className={FooterSt.infoCon}>

                    <div className={FooterSt.socials}>
                        <div className = {FooterSt.logoCon}>
                        <IoLogoAngular size={50} />
                        <h2>website</h2>
                        </div>
                     <a>Follow us for more Updates!</a>
                   
                       <div className={FooterSt.socialiconCon}>
                        {socialIcondes.map((item)=>(    
                      <div className={FooterSt.socialicon}>{item.icon}</div> 
                        ))}
                       </div>


                    </div>

                    <div className={FooterSt.quicklinks}>
                        <h2>Quick Links</h2>
                        <hr/>

                        {quickLinksdes.map((item)=>(
                            <>
                         {item.link}
                            </>
                        ))}
                        {/* <a href = "" >Developer &ensp; {">"}</a>
                        <a href = "" >Privacy Policy &ensp; {">"} </a>
                        <a href = "" >Terms of Service &ensp; {">"} </a> */}
                    </div>

                    <div className={FooterSt.inventory}>
                         <h2>Inventory</h2>
                        <hr/>

                        {inventorydes.map((item)=>(
                            <>
                            {item.link}
                            </>
                        ))}
                           {/* <a href = "#">Product Tracking &ensp; {">"}</a>
                        <a href = "#">Supplier Partner &ensp; {">"}</a>
                        <a href = "#">Reports &ensp; {">"}</a> */}
                    </div>
                    <div className={FooterSt.contact}>
                         <h2>Contact</h2>
                        <hr/>
                        <div className={FooterSt.contactlogo}><MdSupportAgent color='green' size={30} /><h3 href = "#">support@website.com</h3></div>
                        <div className={FooterSt.contactlogo}><FaRegAddressCard color='green' size={30} /><h3 href = "#">General Trias, Cavite</h3></div>
                        <div className={FooterSt.contactlogo}><FaCalendarDay color='green' size={30} /><h3 href = "#">Monday - Friday Support</h3></div>
                    </div>

                </div>

            <img className={FooterSt.gradientwarehouse} src={warehousewaves}/>

             </div>
                {/* copyright */}

                 <div className={FooterSt.copyrightCon}>
                    <a>2026 Website All Rights reseved</a>
                    <a>Mark Clarence Nieva</a>
                </div>
                 
            </div>

          
        </footer>


        </>
    )
}

export default Footer;