import {useNavigate} from 'react-router-dom'
import { MyContext } from "../../components/MyContext";
import { useContext  } from "react";

const DeveloperPage=()=>{

    const navigator = useNavigate();
 const { setheaderToggle } = useContext(MyContext);
    return(
        <>

        <h1>Ogu cap</h1>

        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT2iF3iMaBDWMyINox7fLm95Qv0SDvodnlwvk7NXQ9w&s=10"/>

    <button  onClick={()=>{navigator("/"), setheaderToggle(true)}}>Close</button>
        </>
    )
}


export default DeveloperPage;