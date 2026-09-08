import { useState } from "react";
import { MyContext } from "./MyContext";

export function MyProvider({ children }) {
  const [value, setValue] = useState("Hello");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}