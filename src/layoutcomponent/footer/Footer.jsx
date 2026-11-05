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


                    </div>

                    <div className={FooterSt.quicklinks}>
                        <h2>Quick Links</h2>
                        <hr/>
                        <a href = "#">Developer</a>
                        <a href = "#">Legal Action</a>
                        <a href = "#">Copyright</a>
                    </div>

                    <div className={FooterSt.inventory}>
                         <h2>Inventory</h2>
                        <hr/>
                           <a href = "#">Product Tracking</a>
                        <a href = "#">Supplier Partner</a>
                        <a href = "#">Reports</a>
                    </div>
                    <div className={FooterSt.contact}>
                         <h2>Contact</h2>
                        <hr/>
                           <a href = "#">Developer</a>
                        <a href = "#">Legal and Compliance</a>
                        <a href = "#">Copyright</a>
                    </div>

                </div>

            <img className={FooterSt.gradientwarehouse} src={warehousewaves}/>

             </div>
                {/* copyright */}

                <div className={FooterSt.copyrightCon}>


                </div>
                
            </div>

          
        </footer>


        </>
    )
}

export default Footer;