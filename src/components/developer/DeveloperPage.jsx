import {useNavigate} from 'react-router-dom'


const DeveloperPage=()=>{

    const navigator = useNavigate();

    return(
        <>

        <h1>Ogu cap</h1>

        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT2iF3iMaBDWMyINox7fLm95Qv0SDvodnlwvk7NXQ9w&s=10"/>

    <button onClick={()=>{navigator("/")}}></button>
        </>
    )
}


export default DeveloperPage;