// import { useContext } from "react";
// import { MyContext } from "./components/MyContext";
import './App.css'
import WebController from './components/WebController'

function App() {
 
  // const { value, setValue } = useContext(MyContext);

  return (
    
    <>

     <header>

            <h1>LOGO NAME</h1>

            <ol class='headerLink'>
                <l1><a href = "#">About</a></l1>
                <l1><a  href = "#">Features</a></l1>
                <l1><a  href = "#">Community</a></l1>
            </ol>

            <div class = "headerbtnCon">
            <button>LOGIN</button>
            <button>SIGNUP</button>
          </div>


        </header>


    <WebController/>
 
    </>
  )
}

export default App
