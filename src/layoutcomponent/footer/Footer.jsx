import FooterSt from '../footer/FooterSt.module.css';

import warehousewaves from "../../assets/warehouse_waves.jpg";

import { IoLogoAngular } from "react-icons/io";

const Footer = ()=>{


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
                   <a>Tracks thousands of Products across every warehouse get real-time stock updates, and never run out of what matters.</a>
                   
                       <div className={FooterSt.socialIcon}></div>
                    </div>

                    <div className={FooterSt.quicklinks}>
                        <h2>Quick Links</h2>
                        <hr/>
                        <a href = "#">Developer &ensp; {">"}</a>
                        <a href = "#">Privacy Policy &ensp; {">"} </a>
                        <a href = "#">Terms of Service &ensp; {">"} </a>
                    </div>

                    <div className={FooterSt.inventory}>
                         <h2>Inventory</h2>
                        <hr/>
                           <a href = "#">Product Tracking &ensp; {">"}</a>
                        <a href = "#">Supplier Partner &ensp; {">"}</a>
                        <a href = "#">Reports &ensp; {">"}</a>
                    </div>
                    <div className={FooterSt.contact}>
                         <h2>Contact</h2>
                        <hr/>
                        <h3 href = "#">support@website.com</h3>
                        <h3 href = "#">General Trias, Cavite</h3>
                        <h3 href = "#">Monday - Friday Support</h3>
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