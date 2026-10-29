import LandingPageSt from '../landing/LandingPageSt.module.css';

import inventoryIcon from "../../assets/inventoryicon.png";
const LandingPage=()=>{

  const infoPerformance=[{
    infotext:"Active Users",
    infoCount:200
  },
  {
    infotext:"Positive Feedback",
    infoCount:200
  }
]

    return(
        <>

      <div className={LandingPageSt.container}>

{/* pageinfo */}
        <div className={LandingPageSt.pageinfo}>
          <button>Start Sorting</button>
          <h1>LARGESCALE INVENTORY SYSTEM</h1>
          <a>Track thousands of products across every warehouse, get real-time stock updates, and never run out of what matters.</a>

          <hr/>

          <div className={LandingPageSt.infocountCon}>
          {infoPerformance.map((element)=>(

           <div className={LandingPageSt.infocount}>
            <h2>{element.infotext}</h2>
            <div>{element.infoCount}</div>
           </div>

          ))}
        </div>


        </div>

       {/* Image */}
        <div className={LandingPageSt.imageCon}>

          <img src={inventoryIcon} alt="Inventory system icon" />

        </div>

      </div>
        </>
    )

}

export default LandingPage;