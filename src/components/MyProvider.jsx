import { useState } from "react";
import { MyContext } from "./MyContext";

export function MyProvider({ children }) {

  const [value, setValue] = useState("Hello");

  //header toggle

  const [headerToggle,setheaderToggle]=useState(true);
  
  const [sidebarToggle,setsidebarToggle]=useState(false);

  //profile active
  const [profileActive,setprofileActive]=useState({});

  return (
    <MyContext.Provider value={{ 
      value, setValue,
      headerToggle,setheaderToggle,
      sidebarToggle,setsidebarToggle,
      profileActive,setprofileActive

    }}>
      {children}
    </MyContext.Provider>
  );
}