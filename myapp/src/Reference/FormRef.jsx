import { useRef } from "react";
import "./formref.css";
function Vite(){
    const inputRef=useRef(null);
    const inputFocus=()=>{
        inputRef.current.focus();
    }
    return(
        <>
        <h2>hillo dear how are you</h2>
        <div className="main-box">
            <h1>using the reference</h1>
            <input type="text" placeholder="Enter the value" ref={inputRef}/>
            <button onClick={inputFocus}>click the button</button>
        </div>
        </>
    );
}
export default Vite;