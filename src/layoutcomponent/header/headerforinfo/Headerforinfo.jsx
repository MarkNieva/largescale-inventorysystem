import HeaderforinfoSt from '../headerforinfo/HeaderforinfoSt.module.css';
import { useContext  } from "react";
import { MyContext } from "../../../components/MyContext";


const Headerforinfo=()=>{

     const { headerforInfoHeadtext } = useContext(MyContext);
    const { headerforInfoSubtext } = useContext(MyContext);

return(

    <>
    <header>

    <div className={HeaderforinfoSt.headerforinfoCon}>

       <div className={HeaderforinfoSt.headertextCon}>
        <h2>{headerforInfoHeadtext}</h2>
        <a>{headerforInfoSubtext}</a>
       </div>

    </div>
    
    </header>
    </>
)
}

export default Headerforinfo;