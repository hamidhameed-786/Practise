import Component3 from "./Component3.jsx";
import { usernameContext } from "./Component1";
import "./name.css";
import { useContext } from "react";
function Component2(){
    const username=useContext(usernameContext)
    return(
        <>
        <div className="box-1">
            <h3>component 2</h3>
            <p>hello again, {username}</p>
            <Component3 />
        </div>
        </>
    );
}
export default Component2;