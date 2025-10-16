import { createContext } from "react";
export const usernameContext=createContext();
import Component2 from "./Component2.jsx";
import "./name.css";
function Component1(){
  const username="hamid";
  return(
    <>
    <div className="box-1">
      <h3>Component 1</h3>
      <p>hello,{username}</p>
      <usernameContext.Provider value={username}>
      <Component2 />
      </usernameContext.Provider>

    </div>
    </>
  );
}
export default Component1;