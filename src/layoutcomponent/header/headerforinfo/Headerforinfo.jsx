import HeaderforinfoSt from '../headerforinfo/HeaderforinfoSt.module.css';
import { useContext  } from "react";
import { MyContext } from "../../../components/MyContext";
import {useNavigate} from 'react-router-dom'

const Headerforinfo=()=>{

     const { headerforInfoHeadtext } = useContext(MyContext);
    const { headerforInfoSubtext } = useContext(MyContext);
    const { setheaderToggle } = useContext(MyContext);
      const navigator = useNavigate();

      const backToLanding=()=>{
        setheaderToggle("landingheader")
        navigator("/")

      }

return(

    <>
    <header>

    <div className={HeaderforinfoSt.headerforinfoCon}>

       <div className={HeaderforinfoSt.headertextCon}>
        <h2>{headerforInfoHeadtext}</h2>
        <a>{headerforInfoSubtext}</a>
       </div>

       <button onClick={backToLanding}><h2>Exit</h2></button>

    </div>
    
    </header>
    </>
)
}

export default Headerforinfo;