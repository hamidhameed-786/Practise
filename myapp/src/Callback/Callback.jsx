import { useCallback, useState } from "react";
import "./Callback.css";
function Vite(){
    const[count,setCount]=useState(0);
    const perCount=useCallback(()=>{
        setInterval(()=>{
            setCount((prevCount)=>prevCount+1);
        },1);
    },[])
    return(
        <>
        <h2>hillo bhai</h2>
        <div className="box">
            <p>Count :{count}</p>
            <button onClick={perCount}>press to increment</button>
        </div>
        </>
    );
}
export default Vite;