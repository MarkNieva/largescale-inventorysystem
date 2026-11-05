import FooterSt from '../footer/FooterSt.module.css';

import warehousewaves from "../../assets/warehouse_waves.png";


const Footer = ()=>{


    return(

        <>

        <footer>

            <div className={FooterSt.container}>

              <div className={FooterSt.generalCon}>
                {/* information */}

                <div className={FooterSt.infoCon}>

                    <div className={FooterSt.socials}></div>
                    <div className={FooterSt.quicklinks}></div>
                    <div className={FooterSt.inventory}></div>
                    <div className={FooterSt.contact}></div>

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